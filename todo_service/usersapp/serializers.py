from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from .models import ToDoUser


class SimpleTodouserModelSerializer(ModelSerializer):
    class Meta:
        model = ToDoUser
        fields = ('first_name', 'last_name')


class ToDoUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ToDoUser
        fields = ('url', 'username', 'first_name', 'last_name', 'email',)
