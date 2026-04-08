from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    ROLE_CONTENT=[
        ('Admin','Admin'),
        ('Employee','Employee'),
    ]
    Role=models.CharField(max_length=25,choices=ROLE_CONTENT,default='Employee')

class Asset(models.Model):
    STATUS_CHOICE=[
        ('Approved','Approved'),
        ('Rejected','Rejected'),
        ('Pending','Pending')
    ]
    name=models.CharField(max_length=150)
    type=models.CharField(max_length=150)
    serial_number=models.CharField(max_length=15,unique=True)
    status=models.CharField(max_length=25,choices=STATUS_CHOICE,default='Pending')
    Department- Assignment Page # Page
LIVE PROJECT
Module 1: Django (Backend + Admin Panel)
Goal: Build the core backend business logic and admin interface.
Tasks
1. Project Setup
○ Create Django project & app structure.
○ Configure environment variables.
2. User Authentication
○ Custom User model or extend Django User.
○ Roles: Admin, Employee.
3. Core Models
○ Asset (name, type, serial number, status, purchase_date)
○ InventoryItem (item type, quantity, threshold)
○ Assignment (asset → employee → date_assigned/date_returned)
○ RepairTicket (asset, issue, status, assigned technician)
4. Django Admin Setup
○ Make models manageable using Django admin.
○ Add list filters, search, ordering.
5. Basic HTML (optional)
○ Very minimal template for testing forms.
○ Or use admin only.
Output of Module 1
✔ Fully functioning backend
✔ All models created
✔ Admin panel working
✔ Dummy data inserted