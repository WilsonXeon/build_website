from django import forms
from .models import UserDATA


class signModelForm(forms.ModelForm):  # 註冊頁面
    class Meta:
        model = UserDATA
        fields = ('username', 'password', 'name', 'email', 'tel', 'address1', 'address2', 'address3', 'birth')


class editModelForm(forms.ModelForm):  # 編輯個人資料
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


class cardModelForm(forms.ModelForm):  # 編輯信用卡頁面
    class Meta:
        model = UserDATA
        fields = ('card_name', 'card_number1', 'card_number2', 'card_number3', 'card_number4', 'card_date1'
                  , 'card_date2', 'card_CVC')

        widgets = {
            'card_name': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:220px'}),
            'card_number1': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:40px'}),
            'card_number2': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:40px'}),
            'card_number3': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:40px'}),
            'card_number4': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:40.5px'}),
            'card_date1': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:25px'}),
            'card_date2': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:25px'}),
            'card_CVC': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:35px'}),
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


class addressModelForm(forms.ModelForm):  # 編輯地址
    class Meta:
        model = UserDATA
        fields = ('address1', 'address2', 'address3')
        widgets = {
            'address1': forms.Select(attrs={'class': 'form-control', 'style': 'width:425x'}),
            'address2': forms.Select(attrs={'class': 'form-control', 'style': 'width:425x'}),
            'address3': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:425x'}),

        }
        labels = {
            'address1': '',
            'address2': '',
            'address3': ''
        }


class passwordModelForm(forms.ModelForm):  # 編輯密碼
    class Meta:
        model = UserDATA
        fields = ('password',)
        widgets = {
            'password': forms.Select(attrs={'class': 'form-control', 'style': 'width:425x'}),

        }
        labels = {
            'password': '',
        }
