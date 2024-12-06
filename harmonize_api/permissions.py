from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        
        # Solo permitir la modificación si el usuario es el propietario de la tarea
        return obj.owner == request.user
