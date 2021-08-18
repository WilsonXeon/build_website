from django.db import models

# Create your models here.


# 產品
class product(models.Model):
    item_ID = models.CharField(max_length=9)
    item_tpye = models.CharField(max_length=50, blank=True)
    item_name = models.CharField(max_length=50, blank=True)
    item_amount = models.DecimalField(max_digits=4, decimal_places=0)
    item_price = models.DecimalField(max_digits=4, decimal_places=0)
    pic = models.ImageField(null=True, blank=True)


# 使用者資料
class UserDATA(models.Model):
    username = models.CharField(max_length=128, blank=False, null=False, unique=True)
    password = models.CharField(max_length=256)
    name = models.CharField(max_length=50)
    email = models.EmailField(blank=False, null=False)
    tel = models.CharField(max_length=20)
    address1 = models.CharField(max_length=3)
    address2 = models.CharField(max_length=6)
    address3 = models.CharField(max_length=100)
    birth = models.CharField(max_length=10)
    card_name = models.CharField(max_length=50)
    card_number1 = models.CharField(max_length=4)
    card_number2 = models.CharField(max_length=4)
    card_number3 = models.CharField(max_length=4)
    card_number4 = models.CharField(max_length=4)
    card_date1 = models.CharField(max_length=2)
    card_date2 = models.CharField(max_length=2)
    card_CVC = models.CharField(max_length=3)
