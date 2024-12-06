from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        
        
        return obj.owner == request.user
