
from xml.etree.ElementInclude import include
from checkout.settings import STATIC_URL
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
urlpatterns = [
     path('mailbox/', views.addMail, name='addMail'),
     path('register/', views.register, name='register'),
     path('login/', views.logIn, name='logIn'),
     path('googlelogin/', views.googleLogIn, name='glogIn'),
     path('logout/', views.logout, name='logOut'),
     path('forgot/', views.forgot, name='forgot'),
     path('getuser/', views.getuser, name='getuser'),
     path('getsettings/', views.getSettings, name='getsettings'),
     path('getcoupon/', views.getCoupon, name='getcoupon'),
     # 
     path('stripe/create-checkout-session/',
          views.createSessionStripe, name='createsession'),
     # 
     path('payu/create-checkout-session/',
          views.createSessionPayU, name='createsessionpayu'),
     #        
     path("paypal/create/", views.createSessionPaypal, name='createpaypal'),
     path("paypal/order/<int:order_id>/capture/",
          views.captureSessionPaypal, name='capturepaypal'),
     # 
     path("crypto/create-checkout-session", views.createSessionCrypto, name='createsessioncrypto'), 
     # 
     path("getreviews/", views.getReviews, name='getreviews'),
     path("postreview/", views.postReview, name='postreviews'),
     # 
     path('account/<int:pkid>', views.acc_form, name='acc_form'),
     path("handleaaccdetails/", views.handleaaccdetails, name='handleaaccdetails'),
     #    
     # path('success/<int:order_id>/', views.successPay, name='success'),
     path('success/', views.successPay, name='success'),
     path('fail/<int:order_id>/', views.failPay, name='fail'),
     path('paydata/',views.paydata,name='paydata')
]
