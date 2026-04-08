from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.contrib.auth.models import AbstractUser
from django.core.mail import send_mail
from .models import CustomUser,Asset,
# Create your views here.
