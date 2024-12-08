from django_filters import rest_framework as filters
from .models import Task

class TaskFilter(filters.FilterSet):
    priority = filters.ChoiceFilter(choices=Task.PRIORITY_CHOICES)
    status = filters.ChoiceFilter(choices=Task.STATUS_CHOICES)
    due_date = filters.DateFilter(field_name='due_date', lookup_expr='gte')  
    overdue = filters.BooleanFilter(method='filter_overdue')

    class Meta:
        model = Task
        fields = ['priority', 'status', 'due_date']

    def filter_overdue(self, queryset, name, value):
        if value:
            return queryset.filter(due_date__lt=timezone.now())  
        return queryset