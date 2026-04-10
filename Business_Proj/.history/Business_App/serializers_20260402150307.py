from rest_framework.serializers import Serializer
from . models import Asset,InventoryItem,Assignment,RepairTicket

class AssetSerializer(Serializer.ModelSerilizer)