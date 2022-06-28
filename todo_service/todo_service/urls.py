from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter

from todoapp.views import ProjectModelViewSet, ToDoModelViewSet
from usersapp.views import ToDoUserCustomViewSet

route = DefaultRouter()
route.register('todousers', ToDoUserCustomViewSet)
route.register('project', ProjectModelViewSet)
route.register('todo', ToDoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('api/', include(route.urls)),
]
