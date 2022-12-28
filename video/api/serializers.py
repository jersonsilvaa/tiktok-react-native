from rest_framework.serializers import ModelSerializer
from video.models import Video

class VideoSerializer(ModelSerializer):

    class Meta:
        model = Video
        fields = [
            'id',
            'description',
            'music',
            'video',
            'image',
            'user',
            'createdAt',
            'shareCounter',
            'commentsCounter',
            'likesCounter'
        ]