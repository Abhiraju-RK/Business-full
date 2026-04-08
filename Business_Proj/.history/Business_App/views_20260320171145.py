from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.contrib.auth.models import AbstractUser
from .models import CustomUser,Asset,RepairTicket,InventoryItem,Assignment
from datetime import datetime
from django.db.models import Sum
from django.core.mail import send_mail
from django.db.models import Q
from d
# Create your views here.
