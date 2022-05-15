from django.contrib import admin

from .models import Project, ToDo

admin.site.register(Project)
# admin.site.register(ToDo)


@admin.register(ToDo)
class ToDoAdmin(admin.ModelAdmin):
    list_display = ['title', 'project']
