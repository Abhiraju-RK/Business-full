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
    