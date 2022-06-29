from rest_framework.serializers import HyperlinkedModelSerializer

from .models import ToDoUser


class ToDoUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ToDoUser
        fields = ('url', 'username', 'first_name', 'last_name', 'email',)
