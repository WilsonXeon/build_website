from django.contrib import admin
from .models import sign, product, UserDATA


# Register your models here.

class signAdmin(admin.ModelAdmin):
    list_display = ('username', 'name', 'tel')  # 顯示欄位
admin.site.register(sign, signAdmin)


class productAdmin(admin.ModelAdmin):
    list_display = ('item_ID', 'item_name')
admin.site.register(product, productAdmin)


class UserDATAAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'name', 'tel', 'address1', 'address2', 'address3')  # 顯示欄位
admin.site.register(UserDATA, UserDATAAdmin)
