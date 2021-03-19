from django.db import models

# Create your models here.
class Work(models.Model):
    Title = models.CharField(max_length=50,blank=False)
    work = models.TextField(blank=False)

    def __str__(self):
        return f"{self.Title}"