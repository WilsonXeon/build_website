from django.shortcuts import render, redirect
from . import models
from .models import try123
from .forms import signModelForm
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
def index(request):
    signs = try123.objects.filter(id=1)
    return render(request, "login/index.html", {"signs": signs})


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username.strip() and password:
            # 使用者名稱字符合法性驗證
            # 密碼長度驗證
            # 更多的其它驗證.....
            try:
                user = models.sign.objects.get(username=username)
            except:
                message = '使用者不存在！'
                return render(request, 'login/login.html', {'message': message})

            if user.password == password:
                print(username, password)
                return redirect('/home/')
            else:
                message = '密碼不正確！'
                return render(request, 'login/login.html', {'message': message})
        else:
            return render(request, 'login/login.html')
    return render(request, 'login/login.html')


def register(request):
    form = signModelForm()

    if request.method == "POST":
        form = signModelForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/home')
    context = {

        'form': form
    }
    return render(request, 'login/register.html', context)


def update(request, pk):
    signs = try123.objects.get(id=pk)
    form = signModelForm(instance=signs)

    if request.method == "POST":
        form = signModelForm(request.POST, instance=signs)
        if form.is_valid():
            form.save()
            return redirect('/user_edit')
    context = {

        'form': form
    }
    return render(request, 'login/update.html', context)


def user_edit(request):
    signs = try123.objects.filter(id=1)
    return render(request, 'login/user_edit.html',  {"signs": signs})


def logout(request):
    return redirect('/login')


@login_required(login_url='Logout')
def home(request):
    return render(request, 'login/home.html')


def error(request):
    return render(request, 'login/404.html')


def sign(request):
    return render(request, 'login/sign.html')


def forget(request):
    return render(request, 'login/forget.html')


def shopping_cart(request):
    return render(request, 'login/shopping_cart.html')


def shopping_info(request):
    return render(request, 'login/shopping_info.html')


def user_adr_edit(request):
    return render(request, 'login/user_adr_edit.html')


def user_ccard(request):
    return render(request, 'login/user_ccard.html')





def user_password_edit(request):
    return render(request, 'login/user_password_edit.html')
