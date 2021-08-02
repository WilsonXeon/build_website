from django import forms
from .models import sign

class signModelForm(forms.ModelForm):
    class Meta:
        model = sign
        fields = '__all__'
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px', "placeholder": "含大小寫英文數字，最多10位"}),
            'password': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px', "placeholder": "含大小寫英文及數字，最多10位"}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px', "placeholder": "陳ＸＸ"}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:350px', "placeholder": "adcd123@XXX.com"}),
            'tel': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px', "placeholder": "0900123123"}),
            'adress': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:450px', "placeholder": "如：台中市西屯區仁義路四段12號之3"}),
            'birth': forms.TextInput(attrs={'type': 'date', 'class': 'form-date', 'style': 'width:350px'})
        }
        labels= {
            'username': '帳號',
            'password': '密碼',
            'name': '姓名',
            'email': '電子郵件',
            'tel': '連絡電話',
            'address': '地址',
            'birth': '生日'
        }