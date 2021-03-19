from django import forms
from django.forms import Textarea
from . import models

class WorkForm(forms.ModelForm):
    class Meta:
        model = models.Work
        fields = '__all__'

        # widgets = ('title'=forms.TextInput(attrs={'type':'text',
        #                                     'placeholder':'Enter the title'
        #                                 })
        #                         'work'=forms.Textarea(attrs={'type':'Textarea',
        #                                     'placeholder':'Enter the task details'
        #                                 })
        # )
        title= forms.TextInput()
        work = forms.Textarea()