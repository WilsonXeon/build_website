"""shop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from login import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login),
    path('home/', views.home, name='home'),
    path('login/', views.login, name='Login'),
    path('logout', views.logout, name='Logout'),

    path('register/', views.register, name='Register'),

    path('forget/', views.forget),
    path('login/register/', views.register),
    path('login/forget/', views.forget),
    path('shopping_cart/', views.shopping_cart),
    path('shopping_info/', views.shopping_info),
    path('user_ccard/', views.user_ccard),
    path('user_adr_edit/', views.user_adr_edit),
    path('user_edit/', views.user_edit, name="edit"),
    path('updateCard/<str:pk>', views.updateCard, name='UpdateCard'),
    path('updatePerson/<str:pk>', views.updatePerson, name='Update'),
    path('updateAress/<str:pk>', views.updateAddress, name='UpdateAddress'),
    path('user_password_edit', views.user_password_edit),
    path('error/', views.error)

]



urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)