from django_filters import rest_framework as filters
from ..models import Project, ToDo


class ToDoFilter(filters.FilterSet):
    project_name = filters.CharFilter(field_name='project__name', lookup_expr='contains')

    class Meta:
        model = ToDo
        # fields = ['project', 'project_name']
        fields = ['project_name']


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']
