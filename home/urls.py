
from checkout.settings import STATIC_URL
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
urlpatterns = [
    path('', views.home, name='home'),
    path('legal/notice/', views.termsandconditions, name='termsandconditions'),
    path('privacy_policy', views.privacypolicy, name='privacypolicy'),

]
