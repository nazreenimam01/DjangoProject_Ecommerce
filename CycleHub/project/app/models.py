from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
       return self.name


class Users(models.Model):
    id=models.IntegerField(primary_key=True)
    email = models.CharField(unique=True, max_length=250)
    password = models.CharField(max_length=250)
    username = models.CharField(max_length=250)
    product_id = models.CharField(max_length=250,null=True)
    order_id = models.CharField(max_length=250,null=True)
    last_login =models.DateTimeField(null=True, blank=True)


    def __str__(self):
        return self.email