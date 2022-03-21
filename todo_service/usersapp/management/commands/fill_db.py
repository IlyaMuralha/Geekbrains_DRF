import json
import os

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

from usersapp.models import ToDoUser

JSON_PATH = 'usersapp/json'


def load_from_json(file_name):
    with open(os.path.join(JSON_PATH, file_name + '.json'), 'r') as f:
        return json.load(f)


class Command(BaseCommand):
    def handle(self, *args, **options):
        todousers = load_from_json('todousers')

        ToDoUser.objects.all().delete()
        for user in todousers:
            new_user = ToDoUser(**user)
            new_user.save()

        # Создаем суперпользователя при помощи менеджера модели
        super_user = User.objects.create_superuser('geekbrains', 'drf@geekbrains.local', 'geekbrains')
