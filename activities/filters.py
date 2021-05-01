import django_filters
from django_filters import CharFilter

from .models import *

class WorkFilter(django_filters.FilterSet):
    work = CharFilter(field_name = 'work', lookup_expr = 'icontains')
    class Meta:
        model = Work
        fields = '__all__'