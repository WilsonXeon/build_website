from django.shortcuts import render, redirect
from . import models
from .models import UserDATA
from .forms import signModelForm, editModelForm, cardModelForm, addressModelForm
from django.contrib.auth.decorators import login_required

from django.http import HttpResponse

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username.strip() and password:
            # 使用者名稱字符合法性驗證
            # 密碼長度驗證
            # 更多的其它驗證.....
            try:
                user = models.UserDATA.objects.get(username=username)
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
    return render(request, 'login/login.html', locals())


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


def updatePerson(request, pk):
    signs = UserDATA.objects.get(id=pk)
    form = editModelForm(instance=signs)

    if request.method == "POST":
        form = editModelForm(request.POST, instance=signs)
        if form.is_valid():
            form.save()
            return redirect('/user_edit')
    context = {

        'form': form
    }
    return render(request, 'login/updatePerson.html', context)

def updateCard(request, pk):
    signs = UserDATA.objects.get(id=pk)
    form = cardModelForm(instance=signs)

    if request.method == "POST":
        form = cardModelForm(request.POST, instance=signs)
        if form.is_valid():
            form.save()
            return redirect('/user_ccard')
    context = {
        'form': form
    }
    return render(request, 'login/updateCard.html', context)


def updateAddress(request, pk):
    signs = UserDATA.objects.get(id=pk)
    form = addressModelForm(instance=signs)

    if request.method == "POST":
        form = addressModelForm(request.POST, instance=signs)
        if form.is_valid():
            form.save()
            return redirect('/user_adr_edit')
    context = {
        'form': form
    }
    return render(request, 'login/updateAddress.html', context)


def user_edit(request):
    signs = UserDATA.objects.filter(id=1)
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
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'login/user_adr_edit.html', {"signs": signs})


def user_ccard(request):
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'login/user_ccard.html', {"signs": signs})


def user_password_edit(request):
    user = request.user
    msg = None

    if request.method == 'POST':
        password = request.POST.get("old_password", "")
        new_password = request.POST.get("new_password", "")
        confirm = request.POST.get("confirm_password", "")


        if user.check_password(password):
            if new_password or confirm:
                msg = "新密碼不能為空"
            elif new_password != confirm:
                msg = "兩次密碼不一致"
            else:
                user.set_password(new_password)
                user.save()
                return redirect("/user_password_edit/")
        else:
            msg = "就密碼輸入錯誤"

    return render(request, 'login/user_password_edit.html', {"msg": msg})
