from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.contrib.auth.models import User
from .models import CustomUser,Asset,RepairTicket,InventoryItem,Assignment
from datetime import datetime
from django.db.models import Sum
from django.core.mail import send_mail
from django.db.models import Q
from django.contrib.
# Create your views here.


def admin(user):
    return user.role=="Admin"

def base(request):
    pass

def home(request):
    pass

def registration(request):
    if request.method =="POST":
        username=request.POST.get('username')
        email=request.POST.get('email')
        password=request.POST.get('password')
        confirm_password=request.POST.get('confirm_password')
        role=request.POST.get('role')

        if username==""or email==""or password=="" or confirm_password=="" or role=="":
            messages.warning(request,"All Field Required !!")
            return redirect('registration')

        if User.objects.filter(email=email).exists():
            messages.warning(request,"Email Already Exits !!")
            return redirect('registration')
        
        if confirm_password!=password:
            messages.warning(request,"Password  didnt Match  !!")
            return redirect('registration')

        user=User.objects.create_user(username=username,email=email,password=password,role=role)
        if role == "Admin":
            user.is_staff=True
            user.is_superuser=True
            user.save()
        messages.success(request,"Registration Successfully Done ")
        return redirect('login_page')
    return render(request,'registration.html')


def login_page(request):
    if request.method =="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')

        user=authenticate(username=username,password=password)

        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            messages.error(request,'Invalid Username and Password')
    return render(request,'login_page.html')


@login_required
def asset_list(request):
    assests=Asset.objects.all()
    return render(request,'asset_list.html',{'assests':assests})

