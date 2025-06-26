from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.test import TestCase

class TaskViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()  
        self.user = get_user_model().objects.create_user(
            username='testuser',
            password='testpassword'
        )
        
        response = self.client.post('/api/token/', {'username': 'testuser', 'password': 'testpassword'})
        print(response.data)
        self.assertEqual(response.status_code, 200) 
        self.token = response.data['access']  
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.token)  

        # Ajustamos los datos de la tarea para que coincidan con los requeridos en el serializer
        self.url = reverse('task-list-create')
        self.data = {
            'title': 'Test Task',  # Cambiado a 'title'
            'description': 'Test task description',  # Campo opcional
            'due_date': '2025-12-31',  # Asegúrate de que la fecha sea válida
            'priority': 'M',  # Prioridad válida
            'status': 'open',  # Estatus válido
            'owner': self.user.id,  # Usuario propietario
        }

    def test_task_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_task_creation(self):
        response = self.client.post(self.url, self.data, format='json')
        print(response.data)  # Imprime la respuesta para ver qué está fallando si no es 201
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['title'], 'Test Task')

    def test_unauthorized_task_creation(self):
        self.client.logout()  # Desloguea al usuario
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
