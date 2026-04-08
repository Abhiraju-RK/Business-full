from rest_framework.serializers import serializer
from . models import Asset,InventoryItem,Assignment,RepairTicket

class AssetSerializer(serializer.ModelSerilizer):
    class Meta:
        model=Asset
        fields=