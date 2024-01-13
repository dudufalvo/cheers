from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import UserSerializer, ProductsSerializer
from api.models import User, Products


@api_view(['GET'])
def get_routes():
  '''view that returns all the routes of the api'''
  routes = [
    'users: http://localhost:8000/api/users/',
    'products: http://localhost:8000/api/products/',
  ]
  return Response(routes)


#users
@api_view(['GET', 'POST'])
def user_list(request):
  ''' view that gives us the possibility of get a 
  list of all users and/or add new ones'''

  if request.method == 'GET':
    # get all the questions on the data base and serialize the data to return it
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

  elif request.method == 'POST':
    # create a new question and serialize it
    serializer = UserSerializer(data=request.data)

    # verifies if the serialized data is valid and, if yes, save it
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def user(request, token):
  ''' view that manipulates a specific question, selected by it's id,
  in a way that is possible get it's data, update or delete it'''

  # verifies if the question exists through it's id and return a 404 ERROR if not
  try:
    user = User.objects.get(id_token=token)
  except User.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == 'GET':
    # serialize the question and returns it's data
    serializer = UserSerializer(user)
    return Response(serializer.data)

  elif request.method == 'PUT':
    # updates the data of an existing question and verifies if it still valid
    serializer = UserSerializer(user, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    # delete the question and returns a no content error
    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


#products
@api_view(['GET', 'POST'])
def products_list(request):
  ''' view that gives us the possibility of get a 
  list of all products and/or add new ones'''

  if request.method == 'GET':
    # get all the questions on the data base and serialize the data to return it
    products = Products.objects.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)

  elif request.method == 'POST':
    # create a new question and serialize it
    serializer = ProductsSerializer(data=request.data)

    # verifies if the serialized data is valid and, if yes, save it
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def product(request, id):
  ''' view that manipulates a specific question, selected by it's id,
  in a way that is possible get it's data, update or delete it'''

  # verifies if the question exists through it's id and return a 404 ERROR if not
  try:
    product = Products.objects.get(id=id)
  except Products.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == 'GET':
    # serialize the question and returns it's data
    serializer = ProductsSerializer(product)
    return Response(serializer.data)

  elif request.method == 'PUT':
    # updates the data of an existing question and verifies if it still valid
    serializer = ProductsSerializer(product, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    # delete the question and returns a no content error
    product.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)