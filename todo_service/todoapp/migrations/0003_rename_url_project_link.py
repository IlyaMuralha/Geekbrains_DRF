# Generated by Django 3.2 on 2022-05-15 18:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0002_auto_20220515_1517'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='url',
            new_name='link',
        ),
    ]