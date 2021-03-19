from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import (TemplateView,ListView,DetailView,CreateView,UpdateView,DeleteView)
from . import forms
from . import models

# Create your views here.
def home(request):
    return render(request,'activities/home.html')

def create(request):
    if request.method == 'POST':
        form = forms.WorkForm(request.POST)

        if form.is_valid():
            form.save()
    
    else:
        form = forms.WorkForm()
        # model = models.Work

    context ={'form':form}
    return render(request,'activities/create.html',context)
