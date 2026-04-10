from .serializers import AssetSerializer,RepairSerializer,InventorySerializer,AssignmentSerializer
from . models import Asset,Assignment,InventoryItem,RepairTicket
from rest_framework import viewsets


class AssetView(viewsets.ModelViewSet):
    queryset=Asset.objects.all()
    serializer_class=AssetSerializer
    filterset_fields=['status','type']
    search_fields=['name','serial_number']


class RepairView(viewsets.ModelViewSet):
    