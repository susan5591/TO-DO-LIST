from django.db import models

# Create your models here.
class Work(models.Model):
    Priority_choice = [
        ('High','High'),
        ('Average','Average'),
        ('Low','Low')
    ]
    Title = models.CharField(max_length=50,blank=False)
    Job = models.TextField(blank=False)
    Entry_Dates = models.DateField(auto_now_add=True , null=True, blank=True)
    Due_Dates = models.DateField(blank=False, null=False)    
    Priority = models.CharField(max_length=100, choices=Priority_choice, default="")

    def __str__(self):
        return f"{self.Title},{self.Entry_Dates}"