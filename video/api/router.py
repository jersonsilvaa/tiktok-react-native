from rest_framework.routers import DefaultRouter
from video.api.views import VideoApiViewSet

routerVideo = DefaultRouter()

routerVideo.register(prefix='video', basename='video', viewset=VideoApiViewSet)