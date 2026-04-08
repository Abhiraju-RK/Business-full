from .serializers import AssetSerializer,RepairSerializer,InventorySerializer,AssignmentSerializer
from . models import Asset,Assignment,InventoryItem,RepairTicket
from rest_framework import viewsets


class AssetView(viewsets.ModelViewSet):
    queryset=Asset.objects.all()
    serializer_class=AssetSerializer
    filterset_fields=['status','type']
    search_fields=['name','serial_number']


class RepairView(viewsets.ModelViewSet):
    queryset=RepairTicket.objects.all()
    serializer_class=RepairSerializer

class AssignmentView(viewsets.ModelviewSet):
    queryset=Assignment.objects.all()
    serilizer_class=AssetSerializer

    def perform_create(self,serializer):
        asset=serializer.validate_data