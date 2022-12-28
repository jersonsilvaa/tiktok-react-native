from django.contrib import admin
from video.models import Video

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = (
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
    )