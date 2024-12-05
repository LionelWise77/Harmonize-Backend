from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    PRIORITY_CHOICES = [
        ('L', 'Low'),
        ('M', 'Medium'),
        ('H', 'High'),
    ]
    
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('overdue', 'Overdue'),
    ]
    
    title = models.CharField(max_length=255)  # Título de la tarea
    description = models.TextField(blank=True)  # Descripción opcional
    due_date = models.DateField(null=True, blank=True)  # Fecha límite
    priority = models.CharField(max_length=1, choices=PRIORITY_CHOICES, default='M')  # Prioridad
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')  # Estado de la tarea
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tasks")  # Usuario asignado a la tarea
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación
    updated_at = models.DateTimeField(auto_now=True)  # Fecha de última actualización

    class Meta:
        ordering = ['due_date', 'priority']

    def __str__(self):
        return f"{self.title} ({self.get_status_display()})"
