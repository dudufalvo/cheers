from rest_framework import serializers
from api import models

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.User
    fields = '__all__'

class ProductsSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Products
    fields = '__all__'

class DeliverersSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Deliverers
    fields = '__all__'