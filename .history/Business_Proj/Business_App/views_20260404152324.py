from .serializers import AssetSerializer, RepairSerializer, InventorySerializer, AssignmentSerializer
from .models import Asset, Assignment, InventoryItem, RepairTicket,CustomUser
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password


class AssetView(viewsets.ModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer
    filterset_fields = ['status', 'type']
    search_fields = ['name', 'serial_number']

class InventoryView(viewsets.ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventorySerializer

class AssignmentView(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

    def perform_create(self, serializer):
        asset = serializer.validated_data['asset']
        asset.status = 'Assigned'
        asset.save()
        serializer.save()

class RepairView(viewsets.ModelViewSet):
    queryset = RepairTicket.objects.all()
    serializer_class = RepairSerializer

    def perform_create(self, serializer):
        asset = serializer.validated_data['asset']
        asset.status = 'Repair'
        asset.save()
        serializer.save()

@api_view(['GET'])
def dashboard(request):
    return Response({
        'total_assets': Asset.objects.count(),
        'available': Asset.objects.filter(status='Available').count(),
        'assigned': Asset.objects.filter(status="Assigned").count(),
        'repair': Asset.objects.filter(status="Repair").count(),
        'tickets': RepairTicket.objects.count(),
    })


@api_view(['POST'])
def register_user(request):
    data=request.data
    user=CustomUser.objects.create(
        username=data['username'],
        password=make_password(data['password']),
        role=data.get('role','Employee')
    )
    return Response({"message": "User created"})