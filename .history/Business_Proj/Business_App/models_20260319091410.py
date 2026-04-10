from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    ROLE_CONTENT=[
        ('Admin','Admin'),
        ('Employee','Employee'),
    ]
    Role=models.CharField(max_length=25,choices=)
