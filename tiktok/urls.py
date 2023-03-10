"""tiktok URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the -() function: from django.urls import -, path
    2. Add a URL to urlpatterns:  path('blog/', -('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include

from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from video.api.router import routerVideo


schema_view = get_schema_view(
   openapi.Info(
      title="TikTok - API",
      default_version='v1',
      description="API DOC DE TIKTOK",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="jerson.silva99@hotmail.com"),
      license=openapi.License(name="BSD License")
   ),
    public=True
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.api.router')),
    path('redocs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include(routerVideo.urls)),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
