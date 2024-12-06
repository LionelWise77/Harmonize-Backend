from rest_framework import serializers
from .models import Task
from django.utils import timezone  

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'due_date', 'priority', 'status', 'owner', 'created_at', 'updated_at']

    def validate_due_date(self, value):
        
        if value and value < timezone.now().date():
            raise serializers.ValidationError("date cannot be before that the actual date .")
        return value
