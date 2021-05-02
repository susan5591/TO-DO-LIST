from django import forms
from django.forms import Textarea
from . import models
from django.forms import RadioSelect

class DateInput(forms.DateInput):
    input_type = 'date'

class WorkForm(forms.ModelForm):
    class Meta:
        model = models.Work
        fields = '__all__'
        widgets = {
            'Due_Dates':DateInput()
        }

