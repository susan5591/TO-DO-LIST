from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import (TemplateView,ListView,DetailView,CreateView,UpdateView,DeleteView)
from . import forms
from . import models

# Create your views here.
def home(request):
    task = models.Work.objects.all().order_by('-id')
    context = {
        'task':task
    }
    return render(request,'activities/home.html',context)

def create(request):
    if request.method == 'POST':
        form = forms.WorkForm(request.POST)

        if form.is_valid():
            # new_task = models.Work(Title=request.POST['Title'],work=request.POST['work'])
            # new_task.save()
            form.save()
            return redirect('../create')
    
    else:
        form = forms.WorkForm()

    context ={'form':form}
    return render(request,'activities/create.html',context)
