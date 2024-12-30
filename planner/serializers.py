from rest_framework import serializers
from .models import Task
from django.utils import timezone  

class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
        
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'due_date', 'due_time', 'priority', 'status', 'owner' , 'created_at', 'updated_at','attachment']

    def validate_due_date(self, value):
        
        if value and value < timezone.now().date():
            raise serializers.ValidationError("Date cannot be before the current date .")
        return value

