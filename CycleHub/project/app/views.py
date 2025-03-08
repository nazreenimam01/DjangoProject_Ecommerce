from django.shortcuts import render, redirect
from .models import Product,Users
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import login as auth_login

# Create your views here.
def index(request):
    return render(request, 'projectfinal.html')

def signup(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        username = request.POST['username']
        hashed_password = make_password(password)
        user = Users(email=email, password=hashed_password, username=username)
        user.save()
        return redirect('login')
    else:
        return render(request, 'signup.html')


def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        try:
            user = Users.objects.get(email=email)
            if check_password(password, user.password):
                auth_login(request, user)
                return redirect('index')
            else:
                return render(request, 'login.html', {'error': 'Invalid password'})
        except Users.DoesNotExist:
            return render(request, 'signup.html', {'error': 'Email does not exist'})
    else:
        return render(request, 'login.html')

def cart(request):
    return render(request, 'cart.html')