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
    purchase_date = models.DateField()

    def __str__(self):
        return self.name
    

class InventoryItem(models.Model):
    item_type = models.CharField(max_length=100)
    quantity = models.IntegerField()
    threshold = models.IntegerField()

    def __str__(self):
        return self.item_type

class Assignment(models.Model):
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    employee = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    date_assigned = models.DateField()
    date_returned = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.asset} → {self.employee}"
    

class RepairTicket(models.Model):
    REPAIR_CHOICE=[
        ('Approved','Approved'),
        ('Pending','Pending'),
        ('Rejected','Rejected'),
        ('Done','Done'),
    ]
    asset=models.ForeignKey(Asset,on_delete=models.CASCADE)
    issue=models.TextField()
