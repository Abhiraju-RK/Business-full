from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . views import *
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

router=DefaultRouter
router.register('asset',AssetView)
router.register('assignment',AssignmentView)
router.register('inventory',InventoryView)
router.register('repair',RepairView)

urlpatterns = [
    path('',include(router.urls)),
    path('dashboard',dashboard),
    path('token',TokenObtainPairView.as_view())
]
