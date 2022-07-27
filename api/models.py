from turtle import update
from uuid import NAMESPACE_DNS
from django.db import models
from django.db.models.expressions import F
# from datetime import datetime
from django.utils import timezone
from django.db.models.functions import Upper
# 
# 
# 
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.mail import BadHeaderError, send_mail

# Create your models here.


class Promotion(models.Model):
    mail = models.CharField(max_length=255)


class userModel(models.Model):
    # first_name = models.CharField(max_length=255)
    # last_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    mail = models.CharField(max_length=255)
    password = models.CharField(max_length=255)


class sessionModel(models.Model):
    token = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    tim = models.DateTimeField(default=timezone.now)


class settingsModel(models.Model):
    playstation_comfort = models.FloatField()
    playstation_auction = models.FloatField()
    xbox_comfort = models.FloatField()
    xbox_auction = models.FloatField()

class Coupon(models.Model):
    coupon_code = models.CharField(max_length=10,unique=True)
    discount = models.FloatField()



class orderModel(models.Model):
    user = models.CharField(max_length=255)
    info = models.CharField(max_length=255)
    console = models.CharField(max_length=10,default="")
    status = models.IntegerField(default=0)
    tim = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    cur = models.CharField(max_length=5)
    price = models.FloatField()
    quantity = models.IntegerField()
    message = models.CharField(
    max_length=255, default="Will be delivered soon...")
    review_star = models.IntegerField(default=0)
    review_mess = models.CharField(max_length=255, null=True, blank=True)
    EA_status = models.BooleanField(default=False)

class reviewModel(models.Model):
    order = models.IntegerField()
    user = models.CharField(max_length=255)
    item = models.CharField(max_length=255, null=True, blank=True)
    star = models.IntegerField(default=0)
    mess = models.CharField(max_length=255, null=True, blank=True)


class EA_Account(models.Model):
    user = models.CharField(max_length=255, default="0")
    Payment_status = models.IntegerField(default=0)
    quantity=models.CharField(max_length=255,default=0)
    EA_Account_login=models.EmailField(max_length=255)
    EA_Account_Password=models.CharField(max_length=255)
    type_choice = (
            ('Pending', 'Pending'),
            ('Completed', 'Completed'),
            ('Account info wrong', 'Account info wrong'),
            ('Customer Using', 'Customer Using'),
        )
    account_status= models.CharField(max_length=100, blank=True, null=False, choices=type_choice)
    Backup_Codes=models.CharField(max_length=255)
    Email_for_Communication=models.EmailField(max_length=255)
    Whatsapp_Number = models.CharField(max_length=255,default=None, blank=True)

# 
# 
def sendMail(mail, mess):
    # print("mail", mail, mess)
    try:
        send_mail('Mail from ', mess,
                  'name', [mail])
    except Exception as e:
        print(e)
@receiver(post_save, sender=EA_Account)
def updated_account_status(sender, instance, created, **kwargs):
    if created==False:
        # We have a new object or the assignee has changed
        if instance.account_status=="Pending":
            print('Your Order Pending')
            sendMail(instance.Email_for_Communication, "Hello, Your order has been placed")
        elif instance.account_status=="Completed":
            print('Your Order Completed')
            sendMail(instance.Email_for_Communication, "Hello, Your order completed")
        elif instance.account_status=="Account info wrong":
            print('Your Account info wrong')
            sendMail(instance.Email_for_Communication, "Hello, Your Account info wrong, please submit your form again")
        elif instance.account_status=="Customer Using":
            print('You using this EA account')
            sendMail(instance.Email_for_Communication, "Hello, You using this EA account. So,Please logout your EA account. Thank you")
    else:
        pass