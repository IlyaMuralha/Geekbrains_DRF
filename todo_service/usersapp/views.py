from rest_framework import mixins
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from .models import ToDoUser
from .serializers import ToDoUserModelSerializer


class ToDoUserCustomViewSet(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.ListModelMixin,
                           GenericViewSet):
    queryset = ToDoUser.objects.all()
    serializer_class = ToDoUserModelSerializer
