from uuid import uuid4
from django.db import models
from django.contrib.auth import get_user_model
from usersapp.models import ToDoUser


class Project(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(verbose_name='название проекта', max_length=64)
    link = models.CharField(verbose_name='репозиторий', max_length=64)
    users = models.ManyToManyField(get_user_model())

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), null=True, blank=False, on_delete=models.SET_NULL)
    title = models.CharField(verbose_name='заголовок', max_length=64)
    text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    # с помощью класса мета определяем параметр сортировки
    class Meta:
        verbose_name = 'todo'
        verbose_name_plural = 'todoes'
        ordering = ['-updated_at']
