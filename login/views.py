from django.shortcuts import render, redirect
from . import models
from .forms import signModelForm
def home(request):
    return render(request, 'login/home.html')

def forget(request):
    return render(request, 'login/forget.html')
def register(request):
    return render(request, 'login/register.html')

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username.strip() and password:
            # 使用者名稱字符合法性驗證
            # 密碼長度驗證
            # 更多的其它驗證.....
            try:
                user = models.sign.objects.get(account=username)
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

def shopping_cart(request):
    return render(request, 'login/shopping_cart.html')
def shopping_info(request):
    return render(request, 'login/shopping_info.html')
def user_adr_edit(request):
    return render(request, 'login/user_adr_edit.html')
def user_ccard(request):
    return render(request, 'login/user_ccard.html')
def user_edit(request):
    return render(request, 'login/user_edit.html')
def user_password_edit(request):
    return render(request, 'login/user_password_edit.html')

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