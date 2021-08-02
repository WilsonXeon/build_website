from django.db import models
from django.utils import timezone
# Create your models here.

class product(models.Model):
    item_ID = models.CharField(max_length=9)
    item_name = models.CharField(max_length=50, blank=True)
    item_amount = models.DecimalField(max_digits=4, decimal_places=0)
    item_price = models.DecimalField(max_digits=4, decimal_places=0)


class sign(models.Model):
    username = models.CharField(max_length=128, blank=False, null=False, unique=True)
    password = models.CharField(max_length=256)
    name = models.CharField(max_length=50)
    email = models.EmailField(blank=False, null=False)
    tel = models.CharField(max_length=20)
    adress = models.CharField(max_length=100)
    birth = models.CharField(max_length=10)