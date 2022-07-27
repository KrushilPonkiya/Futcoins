from django.http.response import HttpResponseRedirect, JsonResponse
from django.shortcuts import redirect
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from datetime import date, datetime, timedelta


@ csrf_exempt
def base(request):
    return render(request, 'base.html')

@ csrf_exempt
def home(request):
    return render(request, 'home.html')

@ csrf_exempt
def privacypolicy(request):
    return render(request, 'privacy_policy.html')

@ csrf_exempt
def termsandconditions(request):
    return render(request, 't&c.html')




