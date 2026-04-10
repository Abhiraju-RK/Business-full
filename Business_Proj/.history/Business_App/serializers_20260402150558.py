from rest_framework import serializers
from . models import Asset,InventoryItem,Assignment,RepairTicket

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model=Asset
        fields="__all__"


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model=InventoryItem
        fields='__all__'

class 