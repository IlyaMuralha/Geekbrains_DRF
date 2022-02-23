from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from usersapp.views import ToDoUserModelViewSet

route = DefaultRouter()
route.register('todousers', ToDoUserModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(route.urls)),
]
