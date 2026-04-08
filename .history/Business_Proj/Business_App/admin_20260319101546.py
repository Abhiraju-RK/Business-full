from django.contrib import admin
from . models import CustomUser,Asset,RepairTicket,Assignment,InventoryItem

# Register your models here.
@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display=['username','email','first_name','last_name','role']
    list_filter=['role']
    search_fields=['role','username']

@admin.register(Asset)
class AssetAdmin(admin.ModelAdmin):
    list_display=['name','type','serial_number']
    search_fields=['name']

@admin.register(InventoryItem)
class InventoryAdmin(admin.ModelAdmin):
    list_display = ['item_type', 'quantity', 'threshold']
    search_fields =['item_type']

@admin.register(Assignment)
class AssignmentAdmin(admin.ModelAdmin):
    list_display = ['asset', 'employee', 'date_assigned', 'date_returned']
    list_filter = ['date_assigned',]
    search_fields = ['asset__name', 'employee__username']


@admin.register(RepairTicket)
class RepairAdmin(admin.ModelAdmin):
    list_display = ['asset', 'status', 'assigned_technician']
    list_filter = ['status',]
    search_fields = ()