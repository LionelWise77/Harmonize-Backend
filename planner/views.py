from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer
from rest_framework.permissions import IsAuthenticated

# Vista para listar y crear tareas
class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Asigna el usuario autenticado como propietario de la tarea
        serializer.save(owner=self.request.user)

# Vista para obtener, actualizar o eliminar una tarea individual
class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
