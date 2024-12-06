from django.contrib import admin
from .models import Task

admin.site.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'priority', 'status', 'due_date', 'owner', 'created_at')
    list_filter = ('priority', 'status', 'due_date')
    search_fields = ('title', 'description')
