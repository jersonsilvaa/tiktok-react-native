from video.models import Video
from video.api.serializers import VideoSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

class VideoApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = VideoSerializer
    queryset = Video.objects.all()
    http_method_names = ['get', 'post']