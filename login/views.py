from django.shortcuts import render, redirect

def home(request):
    return render(request, 'login/home.html')

def forget(request):
    return render(request, 'login/forget.html')

def register(request):
    pass
    return render(request, 'login/register.html')

def login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)
        return redirect('/home/')
    return render(request, 'login/login.html')