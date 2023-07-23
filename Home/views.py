from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def homePageResp(Request):
    return render(Request, 'hello.html')