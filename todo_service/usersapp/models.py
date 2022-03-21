from uuid import uuid4

from django.db import models


class ToDoUser(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    username = models.CharField(verbose_name='никнэйм', max_length=64)
    first_name = models.CharField(verbose_name='имя', max_length=64)
    last_name = models.CharField(verbose_name='фамилия', max_length=64)
    email = models.EmailField(verbose_name='почта', max_length=128, unique=True)
    age = models.PositiveIntegerField(verbose_name='возраст', null=True)
    password = models.CharField(verbose_name='пароль', max_length=16)

    def __str__(self):
        return "{}".format(self.username)
