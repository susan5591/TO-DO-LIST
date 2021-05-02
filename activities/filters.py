import django_filters
from django_filters import CharFilter

from .models import *

class WorkFilter(django_filters.FilterSet):
    Title = CharFilter(field_name = 'Title', lookup_expr = 'icontains')
    Job = CharFilter(field_name = 'Job', lookup_expr = 'icontains')
    class Meta:
        model = Work
        fields = '__all__'