from rest_framework import serializers
from .models import Task
from django.utils import timezone
from datetime import date

class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
        
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'due_date', 'due_time','start_time', 'end_time', 'priority', 'status', 'owner', 'created_at', 'updated_at', 'attachment']
        extra_kwargs = {
            'title': {'required': True},
            'description': {'required': False},
            'due_date': {'required': True},
            'priority': {'required': True},
            'status': {'required': True},
            'attachment': {'required': False},
            }
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.status != 'completed' and instance.due_date and instance.due_date < date.today():
            data['status'] = 'overdue'
        return data

    def validate_due_date(self, value):
        if value and value < timezone.now().date():
            raise serializers.ValidationError("Date cannot be before the current date.")
        return value

    def validate_priority(self, value):
        if value not in ['L', 'M', 'H']:
            raise serializers.ValidationError("Priority must be one of 'L', 'M', or 'H'.")
        return value

    def validate_status(self, value):
        allowed_statuses = ['open', 'in_progress', 'completed', 'overdue']
        if value not in allowed_statuses:
            raise serializers.ValidationError("Status must be one of 'open', 'in_progress', or 'completed'.")
        return value

