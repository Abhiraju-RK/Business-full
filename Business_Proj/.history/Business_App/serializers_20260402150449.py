from rest_framework.serializers import serializer
from . models import Asset,InventoryItem,Assignment,RepairTicket

class AssetSerializer(serializer.ModelSerializer):
    class Meta:
        model=Asset
        fields="__all__"


class InventorySerializer(serializer.ModelSer)