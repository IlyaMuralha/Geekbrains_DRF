# Generated by Django 3.2 on 2022-05-15 18:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0003_rename_url_project_link'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='projects',
            new_name='project',
        ),
    ]