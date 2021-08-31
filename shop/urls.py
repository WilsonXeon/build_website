from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from MysiteApp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login),
    path('home', views.home, name='home'),
    path('login', views.login, name='Login'),
    path('logout', views.logout, name='Logout'),
    path('register', views.register, name='Register'),
    path('forget', views.forget),
    path('login/register', views.register),
    path('login/forget', views.forget),
    path('shopping_cart', views.shopping_cart),
    path('shopping_info', views.shopping_info),
    path('user_ccard', views.user_ccard),
    path('user_adr_edit', views.user_adr_edit),
    path('user_edit', views.user_edit, name="edit"),
    path('updateCard/<str:pk>', views.update_ccard, name='UpdateCard'),
    path('updatePerson/<str:pk>', views.update_person, name='Update'),
    path('updateAddress/<str:pk>', views.update_adr, name='UpdateAddress'),
    path('user_password_edit', views.user_password_edit),
    path('error', views.error)

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
