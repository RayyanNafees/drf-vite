from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets, permissions


class PostViewset(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]

    queryset = Post.objects.all()
