from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer
from harmonize_api.permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticated

class TaskListCreateView(generics.ListCreateAPIView):
    
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        
        serializer.save(owner=self.request.user)


class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly] 

    def perform_update(self, serializer):
       
        serializer.save(owner=self.request.user)
