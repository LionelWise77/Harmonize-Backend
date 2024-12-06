from django_filters import rest_framework as filters
from .models import Task

class TaskFilter(filters.FilterSet):
    priority = filters.ChoiceFilter(choices=Task.PRIORITY_CHOICES)
    status = filters.ChoiceFilter(choices=Task.STATUS_CHOICES)
    due_date = filters.DateFromToRangeFilter()

    class Meta:
        model = Task
        fields = ['priority', 'status', 'due_date']
