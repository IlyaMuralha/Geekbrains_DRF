import json
import os

from django.core.management.base import BaseCommand

from django.contrib.auth import get_user_model

JSON_PATH = 'usersapp/json'


def load_from_json(file_name):
    with open(os.path.join(JSON_PATH, file_name + '.json'), 'r') as f:
        return json.load(f)


class Command(BaseCommand):
    def handle(self, *args, **options):
        todousers = load_from_json('todousers')
        model = get_user_model()

        model.objects.all().delete()
        for user in todousers:
            new_user = model(**user)
            new_user.save()

        # Создаем суперпользователя при помощи менеджера модели
        super_user = model.objects.create_superuser('geekbrains', 'drf@geekbrains.local', 'geekbrains')
