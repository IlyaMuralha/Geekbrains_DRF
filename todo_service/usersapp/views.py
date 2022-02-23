from rest_framework.viewsets import ModelViewSet

from .models import ToDoUser
from .serializers import ToDoUserModelSerializer


class ToDoUserModelViewSet(ModelViewSet):
    queryset = ToDoUser.objects.all()
    serializer_class = ToDoUserModelSerializer

