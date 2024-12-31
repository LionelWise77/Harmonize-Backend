from django.http import Http404
from rest_framework import generics, permissions, filters as drf_filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Task
from .serializers import TaskSerializer
from .filters import TaskFilter
from harmonize_api.permissions import IsOwnerOrReadOnly
from rest_framework.pagination import PageNumberPagination

class TaskPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class TaskListCreateView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    filter_backends = [DjangoFilterBackend, drf_filters.OrderingFilter]
    filterset_class = TaskFilter
    ordering_fields = ['due_date', 'priority', 'created_at']
    ordering = ['due_date']
    pagination_class = TaskPagination

    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        print("Fetched tasks:", response.data)  # Log the data being returned
        return response

class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    
    def get_queryset(self):
        # Solo permite acceso a tareas del usuario autenticado
        return Task.objects.filter(owner=self.request.user)

    def perform_update(self, serializer):
        print("Updating task with data:", serializer.validated_data)
        serializer.save(owner=self.request.user)

    def perform_destroy(self, instance):
        print("Deleting task with id:", instance.id)
        instance.delete()

class TaskDetailView(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]