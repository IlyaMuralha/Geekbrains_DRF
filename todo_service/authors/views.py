from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import AdminRenderer
from rest_framework.viewsets import ModelViewSet
from .models import Author, Biography, Book, Article
from .serializers import AuthorModelSerializer, BiographyModelSerializer, ArticleModelSerializer, BookModelSerializer


class AuthorLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer

    # # фильтрация через query_params
    # def get_queryset(self):
    #     name = self.request.query_params['name'][0]
    #     return Author.objects.filter(first_name__contains=name)

    # # фильтрация через headers
    # def get_queryset(self):
    #     name = self.request.headers.get('name')
    #     return Author.objects.filter(first_name__contains=name)

    # фильтрация через django_filters
    filterset_fields = ['first_name', 'last_name', 'birthday_year']

    # пагинация для view
    pagination_class = AuthorLimitOffsetPagination


class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer


class BiographyModelViewSet(ModelViewSet):
    queryset = Biography.objects.all()
    serializer_class = BiographyModelSerializer


class ArticleModelViewSet(ModelViewSet):
    # если для отдельной вьюхи надо указать свой класс рендера
    renderer_classes = [AdminRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleModelSerializer
