from uuid import uuid4

from django.contrib.auth.hashers import identify_hasher, make_password
from django.contrib.auth.models import AbstractUser

from django.db import models


class ToDoUser(AbstractUser):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    first_name = models.CharField(verbose_name='имя', max_length=64)
    last_name = models.CharField(verbose_name='фамилия', max_length=64)
    email = models.EmailField(verbose_name='почта', max_length=128, unique=True)
    age = models.PositiveIntegerField(verbose_name='возраст', null=True)

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'
        ordering = ('-date_joined',)

    def __str__(self):
        return "{}".format(self.username)

    # переопределяем метод, чтобы все пороли были захэшированы
    def save(self, *args, **kwargs):
        try:
            _alg = identify_hasher(self.password)
        except ValueError:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)
