from django.urls import path
from . import views

app_name = 'activities'

urlpatterns = [
    path("",views.home ),
    path("home/",views.home , name="home"),
    path("create/",views.create , name="create"),
    path("detail/<str:pk>/", views.detail,name="detail"),
    path("edit/<str:pk>", views.edit, name="edit"),
    path("delete/<str:pk>", views.delete, name="delete"),
]