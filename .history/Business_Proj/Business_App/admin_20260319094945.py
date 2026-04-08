from django.contrib import admin
from . models import CustomUser,Asset,RepairTicket,Assignment,InventoryItem

# Register your models here.
@admin.site.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display=('username','email','first_name','last_name','role')
    list_filter=('role')
    search_fields=('role','username')

@admin.site.register(Asset)
class AssetAdmin
