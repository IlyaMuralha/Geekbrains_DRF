from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from rest_framework.serializers import StringRelatedField, PrimaryKeyRelatedField
from .models import Author, Biography, Book, Article


class SimpleAuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = ['first_name', 'last_name']
        # # выводит все поля кроме указаных
        # exclude = ['id']


class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class BiographyModelSerializer(ModelSerializer):
    author = SimpleAuthorModelSerializer()

    class Meta:
        model = Biography
        fields = '__all__'


class BookModelSerializer(ModelSerializer):
    authors = StringRelatedField(many=True)
    # authors = SimpleAuthorModelSerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'


class ArticleModelSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
