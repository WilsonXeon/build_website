from django.contrib import admin
from .models import product, UserDATA


# 在 django admin 後端顯示

class productAdmin(admin.ModelAdmin):  # 商品
    list_display = ('item_ID', 'item_tpye', 'item_name', 'item_price')


admin.site.register(product, productAdmin)


class UserDATAAdmin(admin.ModelAdmin):  # 使用者資料
    list_display = ('id', 'username', 'name', 'tel', 'address1', 'address2', 'address3')  # 顯示欄位


admin.site.register(UserDATA, UserDATAAdmin)
