from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . views import *
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views import register

router=DefaultRouter()
router.register('assets',AssetView)
router.register('assignment',AssignmentView)
router.register('inventory',InventoryView)
router.register('repair',RepairView)


urlpatterns = [
    path('',include(router.urls)),
    path('dashboard/',dashboard),
    path('token/',TokenObtainPairView.as_view()),
    path('token/refresh/',TokenRefreshView.as_view()),
    path('register/', register),
    path('chat/',chat_api),
    path('chatpage/',chatpage,name='chatpage')

]
