from django.contrib import admin
from .models import sign, product

# Register your models here.

class signAdmin(admin.ModelAdmin):
    list_display = ('account', 'name', 'tel') #顯示欄位
admin.site.register(sign,signAdmin)

class productAdmin(admin.ModelAdmin):
    list_display = ('item_ID', 'item_name')
admin.site.register(product,productAdmin)