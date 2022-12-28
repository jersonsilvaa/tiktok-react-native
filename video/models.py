from django.db import models
import os

def getVideoPath(instance, filename):
    ext = filename.split('.')[-1]
    filename = '%s.%s' % (instance.id, ext)

    return os.path.join(f'video/{filename}')

def getImagePath(instance, filename):
    ext = filename.split('.')[-1]
    filename = '%s.%s' % (instance.id, ext)

    return os.path.join(f'video_image/{filename}')

class Video(models.Model):
    description = models.TextField()
    video = models.FileField(upload_to=getVideoPath)
    image = models.ImageField(upload_to=getImagePath)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    sharedCounter = models.IntegerField(default=0)
    likesCounter = models.IntegerField(default=0)
    createdAt = models.DateTimeField(auto_now_add=True)