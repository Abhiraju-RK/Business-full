from .serializers import AssetSerializer, RepairSerializer, InventorySerializer, AssignmentSerializer
from .models import Asset, Assignment, InventoryItem, RepairTicket,CustomUser
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import ChatModel
from django.http im
from django.views.decorators.csrf import csrf_exempt


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


User = get_user_model()
@api_view(['POST'])
def register(request):
    data=request.data
    if User.objects.filter(username=data['username']).exists():
        return Response({"error": "Username already exists"}, status=400)
    user=CustomUser.objects.create_user(
        username=data['username'],
        password=data['password'],
        role=data.get('role','Employee')
    )
    return Response({"message": "User created"})




@csrf_exempt
def chat_api(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body.decode('utf-8'))
            message = body.get("message")

            if not message:
                return JsonResponse({"error": "Empty message"}, status=400)

            response = requests.post(
                "http://localhost:11434/api/generate",
                json={
                    "model": "tinyllama",
                    "prompt": message,
                    "stream": False
                }
            )

            data = response.json()
            reply = data.get("response", "No response")

            ChatModel.objects.create(
                message=message,
                response=reply
            )

            return JsonResponse({
                "response": reply   # 🔥 IMPORTANT (match frontend)
            })

        except Exception as e:
            print("ERROR:", e)
            return JsonResponse({"error": str(e)}, status=500)