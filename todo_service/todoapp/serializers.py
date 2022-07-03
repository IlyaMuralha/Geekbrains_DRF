from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer, StringRelatedField
from todoapp.models import Project, ToDo
from usersapp.serializers import SimpleTodouserModelSerializer


class SimpleProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['uid', 'name']


class ProjectModelSerializer(ModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    user = SimpleTodouserModelSerializer(read_only=True)
    project = SimpleProjectModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
