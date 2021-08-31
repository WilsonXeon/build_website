from django.shortcuts import render, redirect
from MysiteApp import models
from MysiteApp.models import UserDATA
from MysiteApp.forms import signModelForm, editModelForm, cardModelForm, addressModelForm
from django.contrib.auth.decorators import login_required
#  負責引導網址去向


# 登入頁面
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
                return render(request, 'MysiteApp/login.html', {'message': message})

            if user.password == password:
                print(username, password)
                return redirect('/home')
            else:
                message = '密碼不正確！'
                return render(request, 'MysiteApp/login.html', {'message': message})
        else:
            return render(request, 'MysiteApp/login.html')
    return render(request, 'MysiteApp/login.html', locals())


# 註冊頁面
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

    return render(request, 'MysiteApp/register.html', context)


# 顯示個人資料
def user_edit(request):
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'MysiteApp/user_edit.html', {"signs": signs})


# 更新個人資料
def update_person(request, pk):
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
    return render(request, 'MysiteApp/update_person.html', context)


# 更新信用卡
def update_ccard(request, pk):
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
    return render(request, 'MysiteApp/update_ccard.html', context)


# 顯示信用卡
def user_ccard(request):
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'MysiteApp/user_ccard.html', {"signs": signs})


# 更新地址
def update_adr(request, pk):
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
    return render(request, 'MysiteApp/update_adr.html', context)


# 顯示地址
def user_adr_edit(request):
    signs = UserDATA.objects.filter(id=1)
    return render(request, 'MysiteApp/user_adr_edit.html', {"signs": signs})


# 更新密碼
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

    return render(request, 'MysiteApp/user_password_edit.html', {"msg": msg})


# 沒有登入無法透過網址直接進入首頁
@login_required(login_url='Logout')
# 首頁
def home(request):
    return render(request, 'MysiteApp/home.html')


# 登出指引
def logout(request):
    return redirect('/login')


# 錯誤頁面
def error(request):
    return render(request, 'MysiteApp/404.html')


# 忘記密碼頁面
def forget(request):
    return render(request, 'MysiteApp/forget.html')


# 購物車
def shopping_cart(request):
    return render(request, 'MysiteApp/shopping_cart.html')


# 通知頁面
def shopping_info(request):
    return render(request, 'MysiteApp/shopping_info.html')



