import os

from django.db import models
from django.contrib.auth.models import AbstractUser

def getFilePath(instance, filename):
    ext = filename.split('.')[-1]
    filename = '%s.%s' % (instance.id, ext)

    return os.path.join(f'avatar/{filename}')

class User(AbstractUser):
    # Description
    description = models.CharField(max_length=100, blank=True)
    avatar = models.ImageField(upload_to=getFilePath, blank=True)
    
    # Social media
    website = models.CharField(max_length=100, blank=True)
    instagram = models.CharField(max_length=100, blank=True)
    