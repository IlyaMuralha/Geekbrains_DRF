from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer, StringRelatedField

from authors.serializers import SimpleAuthorModelSerializer
from todoapp.models import Project, ToDo


class SimpleProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['name']


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    user = SimpleAuthorModelSerializer(read_only=True)
    project = SimpleProjectModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
