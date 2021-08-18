from django.shortcuts import render, redirect
from . import models
from .models import UserDATA
from .forms import signModelForm, editModelForm, cardModelForm, addressModelForm
from django.contrib.auth.decorators import login_required
#  負責引導網址去向


def login(request):  # 登入頁面
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


def register(request):  # 註冊頁面
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


def user_edit(request):  # 顯示個人資料
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'login/user_edit.html', {"signs": signs})


def update_Person(request, pk):  # 更新個人資料
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
    return render(request, 'login/update_Person.html', context)


def update_Card(request, pk):  # 更新信用卡
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
    return render(request, 'login/update_Card.html', context)


def user_ccard(request):  # 顯示信用卡
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'login/user_ccard.html', {"signs": signs})


def update_Address(request, pk):  # 更新地址
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
    return render(request, 'login/update_Address.html', context)


def user_adr_edit(request):  # 顯示地址
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'login/user_adr_edit.html', {"signs": signs})


def user_password_edit(request):  # 更新密碼
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


@login_required(login_url='Logout')  # 沒有登入無法透過網址直接進入首頁
def home(request):    # 首頁
    return render(request, 'login/home.html')


def logout(request):  # 登出指引
    return redirect('/login')


def error(request):  # 錯誤頁面
    return render(request, 'login/404.html')


def forget(request):  # 忘記密碼頁面
    return render(request, 'login/forget.html')


def shopping_cart(request):  # 購物車
    return render(request, 'login/shopping_cart.html')


def shopping_info(request):  # 通知頁面
    return render(request, 'login/shopping_info.html')



