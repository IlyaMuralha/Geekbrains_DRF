from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from todoapp.views import ProjectModelViewSet, ToDoModelViewSet
from usersapp.views import ToDoUserModelViewSet
from authors.views import AuthorModelViewSet, BiographyModelViewSet, ArticleModelViewSet, BookModelViewSet

route = DefaultRouter()
route.register('todousers', ToDoUserModelViewSet)
route.register('authors', AuthorModelViewSet)
route.register('biography', BiographyModelViewSet)
route.register('book', BookModelViewSet)
route.register('article', ArticleModelViewSet)
route.register('project', ProjectModelViewSet)
route.register('todo', ToDoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(route.urls)),
]
