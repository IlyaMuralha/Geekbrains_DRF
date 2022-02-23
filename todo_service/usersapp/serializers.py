from rest_framework.serializers import HyperlinkedModelSerializer

from .models import ToDoUser


class ToDoUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ToDoUser
        fields = '__all__'
