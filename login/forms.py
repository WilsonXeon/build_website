from django import forms
from .models import UserDATA, sign

class signModelForm(forms.ModelForm):
    class Meta:
        model = UserDATA
        fields = ('username', 'password', 'name', 'email', 'tel', 'address', 'birth')
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px', "placeholder": "含大小寫英文數字，最多10位"}),
            'password': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px', "placeholder": "含大小寫英文及數字，最多10位"}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px', "placeholder": "陳ＸＸ"}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:350px', "placeholder": "adcd123@XXX.com"}),
            'tel': forms.TextInput(attrs={'class':   'form-control', 'style': 'width:400px', "placeholder": "0900123123"}),
            'address': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:450px', "placeholder": "如：台中市西屯區仁義路四段12號之3"}),
            'birth': forms.TextInput(attrs={'type': 'date', 'class': 'form-date', 'style': 'width:350px'})
        }
        labels = {
            'username': '帳號',
            'password': '密碼',
            'name': '姓名',
            'email': '電子郵件',
            'tel': '連絡電話',
            'address': '地址',
            'birth': '生日'
        }


class editModelForm(forms.ModelForm):
    class Meta:
        model = UserDATA
        fields = ('name', 'email', 'tel', 'birth')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px'}),
            'tel': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px'}),
            'birth': forms.TextInput(attrs={'type': 'date', 'class': 'form-control', 'style': 'width:400px'})
        }
        labels = {
            'name': '姓名',
            'email': '信箱',
            'tel': '手機',
            'birth': '生日'
        }

class cardModelForm(forms.ModelForm):
    class Meta:
        model = UserDATA
        fields = ('card_name', 'card_number1', 'card_number2', 'card_number3', 'card_number4', 'card_date1'
                  , 'card_date2', 'card_CVC')

        widgets = {
            'card_name': forms.TextInput(attrs={'class': '', 'style': 'width:100px'}),
            'card_number1': forms.TextInput(attrs={'class': '', 'style': 'width:29.5px'}),
            'card_number2': forms.TextInput(attrs={'class': '', 'style': 'width:29.5px'}),
            'card_number3': forms.TextInput(attrs={'class': '', 'style': 'width:29.5px'}),
            'card_number4': forms.TextInput(attrs={'class': '', 'style': 'width:29.5px'}),
            'card_date1': forms.TextInput(attrs={'class': '', 'style': 'width:16.5px'}),
            'card_date2': forms.TextInput(attrs={'class': '', 'style': 'width:16.5px'}),
            'card_CVC': forms.TextInput(attrs={'class': '', 'style': 'width:23px'}),
        }
        labels = {
            'card_name': '持卡人姓名',
            'card_number1': '信用卡卡號',
            'card_number2': '',
            'card_number3': '',
            'card_number4': '',
            'card_date1': '卡片到期日',
            'card_date2': '',
            'card_CVC': '　CVC驗證'
        }
