from django.contrib import admin
from .models import product, UserDATA


# Register your models here.


class productAdmin(admin.ModelAdmin):
    list_display = ('item_ID', 'item_tpye', 'item_name', 'item_price')
admin.site.register(product, productAdmin)


class UserDATAAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'name', 'tel', 'address1', 'address2', 'address3')  # 顯示欄位
admin.site.register(UserDATA, UserDATAAdmin)
