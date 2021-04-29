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
    form = forms.WorkForm()
    if request.method == 'POST':
        form = forms.WorkForm(request.POST)

        if form.is_valid():
            # new_task = models.Work(Title=request.POST['Title'],work=request.POST['work'])
            # new_task.save()
            form.save()
            return redirect('../') 
    context ={'form':form}
    return render(request,'activities/create.html',context)

def detail(request,pk):
    info = models.Work.objects.get(id=pk)
    context={
        'info':info
    }
    return render(request,"activities/detail.html",context)

def edit(request,pk):
    title = models.Work.objects.get(id=pk)
    form = forms.WorkForm(instance = title)
    if request.method == "POST":
        form = forms.WorkForm(request.POST, instance=title)
        if form.is_valid():
            form.save()
            return redirect ('/')
    context = {
        'form': form
    }
    return render(request,'activities/edit.html',context)

def delete(request,pk):
    title = models.Work.objects.get(id=pk)
    if request.method == "POST":
            title.delete()
            return redirect ('/')
    context = {
        'title': title
    }
    return render(request,'activities/delete.html',context)