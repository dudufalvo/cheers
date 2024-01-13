from django.db import models

# Create your models here.
class User(models.Model):
  token = models.CharField(max_length=100)
  username = models.CharField(max_length=100)
  password = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  image_url = models.CharField(max_length=100)

  def __str__(self):
    return self.username

class Deliverers(models.Model):
  email = models.CharField(max_length=100)
  phone_number = models.CharField(max_length=100)

  def __str__(self):
    return self.email

class Products(models.Model):
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=100, blank=True)
  price = models.FloatField()
  image_url = models.CharField(max_length=100)
  quantity = models.IntegerField()

  def __str__(self):
    return self.name