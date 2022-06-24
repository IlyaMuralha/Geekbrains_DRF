from rest_framework import status
from rest_framework.exceptions import APIException
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from todoapp.filters.filters import ToDoFilter, ProjectFilter
from todoapp.models import ToDo, Project
from todoapp.serializers import ToDoModelSerializer, ProjectModelSerializer


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.filter(active=True)
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoLimitOffsetPagination
    filterset_class = ToDoFilter

    def destroy(self, request, *args, **kwargs):
        try:
            todo = self.get_object()
            todo.active = False
            todo.save()
        except (APIException, AttributeError):
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter
