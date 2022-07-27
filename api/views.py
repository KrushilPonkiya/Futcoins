
from ast import Global
from curses import echo
from encodings import utf_8
from django.http.response import HttpResponseRedirect, JsonResponse
from django.shortcuts import render , redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import date, datetime, timedelta
import os
from django.contrib.auth.hashers import make_password, check_password
from numpy import quantile
import requests
from django.core.mail import BadHeaderError, send_mail
from smtplib import SMTPRecipientsRefused
import os
import stripe
import json
from hashlib import sha512
from api.models import *
# from api.models import  EA_Account,Coupon,sessionModel, orderModel, reviewModel, settingsModel, userModel,mailBoxModel

#
stripe.api_key = 'sk_test_51KYdviSEbvRaYHTxpHP9LB7l8sJ3iZfQExa1I9CnIRd0RlXr6tsBcQ5qlR0t0xOv7QnzogyOghLDNld0Nr3L83SY00ApY54P3t'
# baseUrl = 'https://wowfut.herokuapp.com/api/'
# stripe.api_key = 'sk_test_51KmEe4SDkqHPAp53LcwLKCkrHEf1CwIRV0lgLDbPpzIoBQ6FBw19npqUe4QUkOZAp1G1YILs8lwS8W6cXmfBgpTL00s9UVVcEQ'
baseUrl = 'http://127.0.0.1:8000/api/'
#
GLOBAL_quantity=""
getuserDETAILS=""

@ csrf_exempt
def getuser(request):
    user = getusrdetails(request)
    global getuserDETAILS
    getuserDETAILS=user
    # print(user)
    return JsonResponse(user)


# @ csrf_exempt
# def successPay(request,order_id):
#     ord = orderModel.objects.get(id=order_id)
#     order_id=ord
#     if ord and ord == 0:
#         valid = True
#     else:
#         valid = False
#     ord.status=1
#     ord.save()
#     message="Payment success."
#     return render(request,  'success.html', {"valid": valid,'message':message,})
@ csrf_exempt
def successPay(request):
    message="Your Order has been Placed"
    return render(request,  'success.html', {'message':message,})


@ csrf_exempt
def failPay(request, order_id):
    ord = orderModel.objects.get(id=order_id)
    if ord and ord.status == 0:
        valid = True
    else:
        valid = False
        ord.status=0,
        ord.save()
    message="Payment failed."
    return render(request, 'fail.html', {"valid": valid,"message":message,})


@ csrf_exempt
def getReviews(request):
    ord = list(reviewModel.objects.order_by("-id")[:9].values())
    return JsonResponse({'res': ord})


@ csrf_exempt
def postReview(request):
    order = request.POST.get('order')
    stars = request.POST.get('stars')
    desc = request.POST.get('desc')

    rev = reviewModel()
    rev.order = order
    rev.user = getusrdetails(request)["account"]["name"]
    rev.star = stars
    rev.mess = desc
    rev.save()

    orderModel.objects.filter(id=order).update(review_star=stars, review_mess=desc)

    return JsonResponse({'res': 'sucess'})

# @ csrf_exempt
# def acc_form(request,pkid):
#     ord = orderModel.objects.get(id=pkid)
#     if ord and ord == 0:
#         valid = True
#     else:
#         valid = False
#     ord.status=1
#     ord.save()
#     acc=EA_Account()
#     if ord.status==1 and ord.EA_status==False:
#         ord.EA_status=True
#         ord.save()
#     return render(request, 'account_form.html')
    # else:
    #     return render(request, 'fail.html')

@ csrf_exempt
def acc_form(request,pkid):
    ord = orderModel.objects.get(id=pkid)
    if ord.status==0 and ord.EA_status==False:
        # ord = orderModel.objects.get(id=pkid)
        # if ord and ord == 0:
        #     valid = True
        # else:
        #     valid = False
        ord.status=1
        ord.save()
        acc=EA_Account()
        # acc.qunt
        ord.EA_status=True
        ord.save()
        return render(request, 'account_form.html')
    else:
        return render(request, 'fail.html')


@ csrf_exempt
def handleaaccdetails(request):
    ea_acc=EA_Account()
    # print('EA_Account_Status',ea_acc.account_status)
    ea_acc.user=getusrdetails(request)["account"]["name"]
    ea_acc.Payment_status=1
    ea_acc.EA_Account_login = request.POST.get('EAAccountlogin')
    ea_acc.EA_Account_Password = request.POST.get('EAAccountPassword')
    ea_acc.account_status="Pending"
    ea_acc.Backup_Codes = request.POST.get('BackupCodes')
    ea_acc.Email_for_Communication = request.POST.get('EmailforCommunication')
    ea_acc.Whatsapp_Number = request.POST.get('WhatsappNumber')
    # ea_acc.EA_Account_login = request.POST.get('login')
    # ea_acc.EA_Account_Password = request.POST.get('pass')
    # ea_acc.account_status="Pending"
    # ea_acc.Backup_Codes = request.POST.get('backup')
    # ea_acc.Email_for_Communication = request.POST.get('comemail')
    # ea_acc.Whatsapp_Number = request.POST.get('whatsappnum')
    global GLOBAL_quantity
    ea_acc.quantity = GLOBAL_quantity
    print(f'ea_acc.quantity : {ea_acc.quantity},ea_acc.EA_Account_login : {ea_acc.EA_Account_login},ea_acc.Backup_Codes : {ea_acc.Backup_Codes},ea_acc.Email_for_Communication : {ea_acc.Email_for_Communication},ea_acc.Whatsapp_Number : {ea_acc.Whatsapp_Number},ea_acc.account_status : {ea_acc.account_status}')
    ea_acc.save()
    return redirect('/api/success')




@ csrf_exempt
def forgot(request):
    mail = request.POST.get("mail")
    use = userModel.objects.filter(mail=mail)
    if len(use):
        passw = use[0].password
        mess = "Hey ,"+use[0].name + ". Your password is "+passw

        try:
            sendMail(mail, mess)
            return JsonResponse({'res': 'success'})
        except BadHeaderError:
            return JsonResponse({'error': 'Something went wrong. Try again.'})
        except SMTPRecipientsRefused as e:
            return JsonResponse({'error': 'Invalid mail id.'})
    else:
        return JsonResponse({"error": "Invalid mail id."})








@ csrf_exempt
def createSessionStripe(request):
    cur = request.POST.get('cur')
    price = request.POST.get('price')
    # print(price)
    price = int(float(price))
    name = request.POST.get('name')
    quant = request.POST.get('quantity')
    global GLOBAL_quantity
    GLOBAL_quantity=quant
    console_name = request.POST.get('console_name')
    ord = orderModel()
    ord.user = getusrdetails(request)["account"]["email"]
    ord.info = name
    ord.console = console_name
    ord.cur = cur
    ord.price = price
    ord.quantity = quant
    # print('stripe cur:',cur)
    # print('stripe price:',price)
    # print('stripe price:',price/100)
    # print('stripe name:',name)
    # print('stripe quant:',quant)
    # print('stripe price:',price)
    ord.save()
    # print("price>>>", price, type(price))
    session = stripe.checkout.Session.create(
        line_items=[{
            'price_data': {
                'currency': cur,
                'product_data': {
                    'name': name,
                },
                'unit_amount': price*100,
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url=baseUrl+'account/'+str(ord.id),
        cancel_url=baseUrl+'fail/'+str(ord.id)+"/",
    )

    # print(session)

    # return HttpResponseRedirect(session.url)
    return JsonResponse({'url': session.url})


@ csrf_exempt
def createSessionPayU(request):

    cur = request.POST.get('cur')

    price = request.POST.get('price')
    price = int(float(price))
    # print(price)
    name = request.POST.get('name')
    console_name = request.POST.get('console_name')
    quant = request.POST.get('quantity')
    global GLOBAL_quantity
    GLOBAL_quantity=quant
    # print("quantity",quant)
    ord = orderModel()
    usr = getusrdetails(request)
    ord.user = usr["account"]["email"]
    
    ord.console = console_name
    ord.info = name
    ord.cur = cur
    ord.price = price
    ord.quantity = quant
    ord.save()
    # print("price>>>", price, type(price))

    key = "Ouz8bS"
    salt = "GBpEdaWYcM7Y7xDdE452cfyqSuY9mRgh"

    hash = key+"|"+str(ord.id)+"|"+str(price)+"|"+name+"|" + \
        usr["account"]["name"]+"|"+usr["account"]["email"]+"|||||||||||"+salt

    hash = sha512(hash.encode()).hexdigest()

    head = {"accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"}
    body = {"amount": price,
            "firstname": usr["account"]["name"],
            "email": usr["account"]["email"],
            "productinfo": name,
            "surl": baseUrl+'account/'+str(ord.id),
            "furl": baseUrl+'fail/'+str(ord.id)+"/",
            "txnid": ord.id,
            "hash": hash,
            "key": key
            }
    # url = "https://secure.payu.in/_payment"
    url = "https://sandboxsecure.payu.in/_payment"

    res = requests.post(url, data=body, headers=head)
    # print(res.text)
    return JsonResponse({'url': url, "body": body, "head": head})
    # return JsonResponse({"res":res})


@ csrf_exempt
def createSessionCrypto(request):
    cur = request.POST.get('cur')
    price = request.POST.get('price')
    console=request.POST.get('console')
    print(console)
    # price = price
    # print("price",price)
    name = request.POST.get('name')
    quant = request.POST.get('quantity')
    # print("quantity",quant)
    global GLOBAL_quantity
    GLOBAL_quantity=quant
    ord = orderModel()
    usr = getusrdetails(request)
    Totalprice=request.POST.get('Totalprice')
    ord.user = usr["account"]["email"]
    ord.info = name
    ord.console = console
    ord.cur = cur
    ord.price = Totalprice
    ord.quantity = quant
    ord.save()
    # print("price>>>", price, type(price))
    merchant="05520ab0f3211bba1de33712fc9ab518"
    pay="_pay"
    item_name="futcoins"
    head = {"accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"}
    body = {"merchant": merchant,
            "amountf": price,
            "item_name": item_name,
            "currency": "USD",
            "quantity": quant,
            "want_shipping": "0",
            "allow_quantity": "0",
            "success_url": baseUrl+'account/'+str(ord.id)+"/",
            "cancel_url": baseUrl+'fail/'+str(ord.id)+"/",
            "reset": "1",
            "cmd": pay,
            }
    # print("Crypto:",body)
    url="https://www.coinpayments.net/index.php"
    res = requests.post(url, data=body, headers=head)
    # print(res.text)
    return JsonResponse({"url":url, "body": body, "head": head})
    # return JsonResponse({"res":res})


# start test

@ csrf_exempt
def createSessionPaypal(request):
    cur = request.POST.get('cur')
    price = request.POST.get('price')
    console=request.POST.get('console')
    print(f"This is {cur} and price {price}")
    # price = price
    # print("price",price)
    name = request.POST.get('name')
    quant = request.POST.get('quantity')
    # print("quantity",quant)
    ord = orderModel()
    # usr = getusrdetails(request)
    # ord.user = usr["account"]["email"]
    ord.info = name
    ord.console = console
    ord.cur = cur
    ord.price = price
    ord.quantity = quant
    ord.save()
    # print("price>>>", price, type(price))
    body = {"order_id": ord.id,
            }
    # print("Crypto:",body)
    url="https://127.0.0.1/account"
    res = requests.post(url, data=body)
    # print(res.text)
    # return JsonResponse({"url":url, "body": body})
    return JsonResponse({"res":res})


# end test

@ csrf_exempt
def createSessionPaypal(request):
    post_data = json.loads(request.body)
    cur = post_data['cur']
    price = post_data['price']
    name = post_data['name']
    quant = post_data['quantity']

    head = {"Content-Type": "application/json",
            "Authorization": "Bearer EN1hxhhsLOBZCUpezw9xRGlLiD_OCZbeRAGE8jg8I0iP6kxkQB6V1G3rUh9QG3KDxS5-HqD56kjinKzq"}
    body = {
        "intent": "CAPTURE",
        "purchase_units": [
            {
                "amount": {
                    "currency_code": cur,
                    "value": price*quant
                }
            }
        ]
    }

    res = requests.post(
        'https://api-m.paypal.com/v2/checkout/orders', headers=head, data=body)

    return JsonResponse(res.json())


@ csrf_exempt
def captureSessionPaypal(request, order_id):

    head = {"Content-Type": "application/json",
            "Authorization": "Bearer EN1hxhhsLOBZCUpezw9xRGlLiD_OCZbeRAGE8jg8I0iP6kxkQB6V1G3rUh9QG3KDxS5-HqD56kjinKzq"}

    res = requests.post(
        'https://api-m.paypal.com/v2/checkout/orders/'+order_id+'/capture', headers=head)

    return JsonResponse({res.json()})





@ csrf_exempt
def getSettings(request):
    set = list(settingsModel.objects.all().values())
    cur_rate="""{"USD":1,"AED":3.67,"AFN":87.87,"ALL":110.91,"AMD":477.2,"ANG":1.79,"AOA":443.25,"ARS":111.44,"AUD":1.33,"AWG":1.79,"AZN":1.69,"BAM":1.79,"BBD":2,"BDT":85.52,"BGN":1.79,"BHD":0.376,"BIF":2033.47,"BMD":1,"BND":1.36,"BOB":6.86,"BRL":4.67,"BSD":1,"BTN":75.73,"BWP":11.54,"BYN":3.03,"BZD":2,"CAD":1.25,"CDF":1992.03,"CHF":0.933,"CLP":786.08,"CNY":6.36,"COP":3726.02,"CRC":655.64,"CUP":24,"CVE":101.11,"CZK":22.44,"DJF":177.72,"DKK":6.84,"DOP":54.85,"DZD":142.59,"EGP":18.24,"ERN":15,"ETB":51.18,"EUR":0.917,"FJD":2.08,"FKP":0.765,"FOK":6.84,"GBP":0.765,"GEL":3.08,"GGP":0.765,"GHS":7.6,"GIP":0.765,"GMD":53.71,"GNF":8887.86,"GTQ":7.65,"GYD":208.09,"HKD":7.84,"HNL":24.41,"HRK":6.91,"HTG":106.79,"HUF":347.2,"IDR":14404.66,"ILS":3.23,"IMP":0.765,"INR":75.73,"IQD":1451.45,"IRR":41887.9,"ISK":129.26,"JEP":0.765,"JMD":153.45,"JOD":0.709,"JPY":123.83,"KES":115.06,"KGS":85.6,"KHR":4026.92,"KID":1.33,"KMF":451.11,"KRW":1216.5,"KWD":0.3,"KYD":0.833,"KZT":464.22,"LAK":12512.23,"LBP":1507.5,"LKR":301.5,"LRD":151.93,"LSL":14.65,"LYD":4.65,"MAD":9.57,"MDL":18.3,"MGA":3830.04,"MKD":56.25,"MMK":1797.03,"MNT":2998.16,"MOP":8.08,"MRU":36.19,"MUR":44.32,"MVR":15.37,"MWK":816.04,"MXN":20.1,"MYR":4.21,"MZN":64.08,"NAD":14.65,"NGN":413.79,"NIO":35.63,"NOK":8.78,"NPR":121.17,"NZD":1.44,"OMR":0.384,"PAB":1,"PEN":3.69,"PGK":3.51,"PHP":51.33,"PKR":185.52,"PLN":4.26,"PYG":6952.03,"QAR":3.64,"RON":4.53,"RSD":107.81,"RUB":82.81,"RWF":1033.49,"SAR":3.75,"SBD":7.94,"SCR":14.32,"SDG":443.67,"SEK":9.46,"SGD":1.36,"SHP":0.765,"SLL":11768.42,"SOS":575.35,"SRD":20.58,"SSP":425.44,"STN":22.47,"SYP":2501.75,"SZL":14.65,"THB":33.59,"TJS":12.48,"TMT":3.49,"TND":2.88,"TOP":2.23,"TRY":14.73,"TTD":6.74,"TVD":1.33,"TWD":28.66,"TZS":2314.22,"UAH":29.27,"UGX":3543.62,"UYU":41.27,"UZS":11373.33,"VES":4.41,"VND":22816.36,"VUV":110.21,"WST":2.56,"XAF":601.48,"XCD":2.7,"XDR":0.728,"XOF":601.48,"XPF":109.42,"YER":249.17,"ZAR":14.65,"ZMW":17.53,"ZWL":145.24}"""
    # print(cur_rate[0])
    # url = "https://api.currencyapi.com/v3/latest?apikey=vQkcvSHPLNgzQZVaPPowvd8NX7zvjxlkGE15rhJT&base_currency=USD"
    # url = "https://freecurrencyapi.net/api/v2/latest?apikey=00f98650-9be6-11ec-a217-039aef0789a8&base_currency=USD"
    # url = "https://api.currencyapi.com/v3/latest?apikey=00f98650-9be6-11ec-a217-039aef0789a8&base_currency=USD"
    # rates = requests.get(url).json()
    # print(rates)
    cur_exa=json.loads(cur_rate)
    # currency = json.loads(request.body.decode("utf-8"))
    curr_= request.POST.get("cu_name")
    # print(curr_)
    # cur_exa.read(json)
    # print(cur_exa["cu_name"])
    # cur_name=post_data["cur"]
    return JsonResponse({"settings": set, "rates": cur_exa["USD"]}, safe=False)


@ csrf_exempt
def getCoupon(request):
    set = list(Coupon.objects.all().values())
    # coupon_code = list(Coupon.objects.values('coupon_code'))
    # discount = list(Coupon.objects.values('discount'))
    print('VIEW_coupon_code',set)
    # print('VIEW_coupon_code',coupon_code)
    # print('VIEW_discount',discount)
    return JsonResponse({"set":set}, safe=False)    



    


@ csrf_exempt
def logIn(request):
    if request.method == 'POST':
        mail = request.POST.get('mail')
        passw = request.POST.get('password')

        user = userModel.objects.filter(mail=mail)
        if len(user) == 0:
            return JsonResponse({'error': 'User not exists'})

        resp = loginFunc(mail, passw)

        return resp


@ csrf_exempt
def googleLogIn(request):
    if request.method == 'POST':
        mail = request.POST.get('mail')
        name = request.POST.get('name')
        passw = request.POST.get('token')

        user = userModel.objects.filter(mail=mail)
        if len(user) == 0:
            usr = userModel()
            usr.name = name
            usr.mail = mail
            usr.password = passw
            usr.save()

        resp = googleLoginFunc(mail, passw)

        return resp


@ csrf_exempt
def register(request):
    if request.method == 'POST':
        mail = request.POST.get('mail')
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        passw = request.POST.get('password')

        user = userModel.objects.filter(mail=mail)
        # print(user, len(user))
        if len(user) != 0:
            return JsonResponse({'error': 'User already exists!'})

        createUser(mail, fname, lname, passw)

        res = loginFunc(mail, passw)

        return res


@ csrf_exempt
def logout(request):
    if isauth(request):
        cookie = request.COOKIES.get('_qtrajklvfgetqawyuwquywqruyqruy')
        sessionModel.objects.filter(token=cookie).delete()

        response = JsonResponse({'response': 'suceess'})
        response.delete_cookie('_qtrajklvfgetqawyuwquywqruyqruy')
        return response
    else:
        return HttpResponseRedirect('/')


@ csrf_exempt
def addMail(request):
    maill = request.POST.get("mail")
    m = Promotion()
    m.mail = maill
    m.save()
    return JsonResponse({"res": "success"})







##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################

def getusrdetails(request):
    cookie = request.COOKIES.get('_qtrajklvfgetqawyuwquywqruyqruy')
    session = sessionModel.objects.filter(token=cookie)
    user = userModel.objects.filter(mail=session[0].email)[0]
    ord = list(orderModel.objects.filter(user=user.mail).values())
    res = {"account": {
        # "name": user.first_name+" "+user.last_name,
        "name": user.name,
        "email": user.mail, "password": len(user.password)}, "orders": ord}
    return res


def createUser(mail, fname, lname, passw):
    newuser = userModel()
    newuser.mail = mail
    # newuser.password = make_password(passw)
    newuser.password = passw
    # newuser.first_name = fname
    # newuser.last_name = lname
    newuser.name = fname

    newuser.save()


def googleLoginFunc(mail, passw):
    existsession = sessionModel.objects.filter(email=mail)
    users1 = userModel.objects.filter(mail=mail)
    if len(existsession) != 0:
        existsession.delete()

    session = sessionModel()
    tok = os.urandom(32)
    tok = make_password(tok)
    session.token = tok
    session.email = mail
    session.tim = datetime.now()
    session.save()
    response = JsonResponse(
        {'res': 'success'})
    response.set_cookie('_qtrajklvfgetqawyuwquywqruyqruy',
                        tok, max_age=86400)

    response.set_cookie('_qtrajklvfgetqawyuwquywqruyqruy_type',
                        "google", max_age=86400)

    return response


def loginFunc(mail, passw):
    existsession = sessionModel.objects.filter(email=mail)
    users1 = userModel.objects.filter(mail=mail)
    if len(existsession) != 0:
        existsession.delete()
    # if check_password(passw,users1[0].password):
    if passw == users1[0].password:
        session = sessionModel()
        tok = os.urandom(32)
        tok = make_password(tok)
        session.token = tok
        session.email = mail
        session.tim = datetime.now()
        session.save()
        response = JsonResponse(
            {'res': 'success'})
        response.set_cookie('_qtrajklvfgetqawyuwquywqruyqruy',
                            tok, max_age=86400)
        response.set_cookie('_qtrajklvfgetqawyuwquywqruyqruy_type',
                            "email", max_age=86400)
    else:
        response = JsonResponse(
            {'error': 'Wrong password!'})
    return response


def isauth(request):
    cookie = request.COOKIES.get('_qtrajklvfgetqawyuwquywqruyqruy')
    session = sessionModel.objects.filter(token=cookie)
    if len(session) != 0 and cookie != None:
        return True
    else:
        return False


def sendMail(mail, mess):
    # print("mail", mail, mess)
    try:
        send_mail('Mail from ', mess,
                  'name', [mail])
    except Exception as e:
        print(e)


def paydata(request):
    try:
        # if request.user.is_authenticated:
        data = request.GET.get('data')
        data = data.split("?")
        id = data[0]
        email = data[1]
        print('data_email',email)
        payer = data[2]
        con_name = data[3]
        info_name = data[4]
        cur = data[5]
        price = data[6]
        quan = data[7]
        global GLOBAL_quantity
        GLOBAL_quantity=quan
        status = data[8]
        if status == "COMPLETED":
            status = 0
        else:
            status = 0
        print('getuserDETAILS',getuserDETAILS)
        email = getuserDETAILS["account"]["email"]
        print('email_2',email)
        order = orderModel(user=email,info=info_name,console=con_name,cur=cur,price=price,quantity=quan,status=status)
        order.save()
        id = orderModel.objects.last().id
        return redirect(f'/api/account/{id}')
            
        # else:
        #     return redirect('/')
    except:
        return redirect('/')
