from django import forms
from .models import sign

class signModelForm(forms.ModelForm):
    class Meta:
        model = sign
        fields = ('name', 'email', 'tel', 'birth')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px'}),
            'tel': forms.TextInput(attrs={'class': 'form-control', 'style': 'width:400px'}),
            'birth': forms.TextInput(attrs={'type': 'date', 'class': 'form-control', 'style': 'width:400px'})
        }
        labels= {
            'name': '姓名',
            'email': '信箱',
            'tel': '手機',
            'birth': '生日'
        }
