from rest_framework.serializers import ModelSerializer

from video.models import Video
from users.api.serializers import UserSerializer

class VideoSerializer(ModelSerializer):
    userData = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Video
        fields = [
            'id',
            'description',
            'music',
            'video',
            'image',
            'user',
            'userData',
            'createdAt',
            'shareCounter',
            'commentsCounter',
            'likesCounter'
        ]