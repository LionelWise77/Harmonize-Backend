from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from django.test import TestCase

class TaskViewTest(TestCase):
    def setUp(self):
        
        self.user = get_user_model().objects.create_user(
            username='testuser',
            password='testpassword'
        )
        
       
        login = self.client.login(username='testuser', password='testpassword')
        print(f"Login success: {login}")  
        
        self.url = reverse('task-list-create')  
        self.data = {
            'task_name': 'Test Task',
            'due_date': '2024-12-31',
        }

    def test_task_list(self):
        
        response = self.client.get(reverse('task-list-create'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_task_creation(self):
        
        url = reverse('task-list-create')
        data = {
            'title': 'New Task',
            'description': 'New task description',
            'due_date': '2024-12-08',
            'priority': 'M',
            'status': 'open',
            'owner': self.user.id,  
        }
        response = self.client.post(url, data, format='json')
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['title'], 'New Task')

    def test_unauthorized_task_creation(self):
        
        self.client.logout()
        url = reverse('task-list-create')
        data = {
            'title': 'Unauthorized Task',
            'description': 'Should fail',
            'due_date': '2024-12-08',
            'priority': 'L',
            'status': 'open',
        }
        response = self.client.post(url, data, format='json')

       
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
