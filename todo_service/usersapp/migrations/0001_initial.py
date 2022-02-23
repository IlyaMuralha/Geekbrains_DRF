# Generated by Django 3.2.9 on 2022-02-23 16:41

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDoUser',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=64, verbose_name='никнэйм')),
                ('first_name', models.CharField(max_length=64, verbose_name='имя')),
                ('last_name', models.CharField(max_length=64, verbose_name='фамилия')),
                ('email', models.EmailField(max_length=128, unique=True, verbose_name='почта')),
                ('age', models.PositiveIntegerField(null=True, verbose_name='возраст')),
                ('password', models.CharField(max_length=16, verbose_name='пароль')),
            ],
        ),
    ]