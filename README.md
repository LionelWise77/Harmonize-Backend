# Harmonize - Task Management API

Harmonize is a task management application designed to help users organize and prioritize their daily tasks efficiently. This backend provides a REST API for managing tasks and integrates key features such as user authentication, task filtering, and prioritization.

---

## Table of Contents

1. [Features](#features)
2. [Usage](#usage)
3. [Endpoints](#endpoints)
   - [Tasks](#tasks)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Unfixed Bugs](#unfixed-bugs)
7. [Deployment](#deployment)
8. [Credits](#credits)
9. [Content](#content)
10. [Media](#media)

---

## Features

1. User Registration and Authentication:
   - Registration, Login, Logout.
   - Token-based authentication.
2. Task Management:
   - Create, Read, Update, Delete (CRUD) tasks.
   - Task filtering by priority, due date, and status.
3. CORS Configuration:
   - Enables secure communication with the frontend.

## Usage

1. Start the backend server:

   ```bash
   python manage.py runserver

   ```

2. Access the app in your browser at `http://localhost:8000`.

## Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and retrieve a token.

### Tasks/BackEnd

- **GET /api/tasks/**: List all tasks for the authenticated user.
- **POST /api/tasks/**: Create a new task.
- **GET /api/tasks/:id/**: Retrieve details of a specific task.
- **PUT /api/tasks/:id/**: Update a specific task.
- **DELETE /api/tasks/:id/**: Delete a specific task.

---

## Example Requests/BackEnd

### Create a Task

```bash
POST /api/tasks/
Content-Type: application/json
Authorization: Bearer <your_token>
{
  "title": "Complete README",
  "description": "Write the full documentation for the Harmonize app.",
  "due_date": "2024-12-20",
  "priority": "high",
  "category": "Documentation"
}
```

### Response

```json
{
  "id": 1,
  "title": "Complete README",
  "description": "Write the full documentation for the Harmonize app.",
  "due_date": "2024-12-20",
  "priority": "high",
  "category": "Documentation",
  "status": "open",
  "owner": "user@example.com"
}
```

---

## Technologies Used

### **Technologies Used**

- **Django** (4.x): Web framework.
- **Django REST Framework (DRF)**: API development.
- **PostgreSQL**: Database.
- **dj-rest-auth**: User authentication.
- **django-cors-headers**: Handles CORS.
- **cloudinary-storage**: Media file storage.
- **gunicorn**: WSGI HTTP server for deployment.

---

## Install Dependencies

- pip install -r requirements.txt

## Testing

![home](/assets/css/images/lighthouse%20resubmited.png)

- well this webside was my first and take more time, i guest is not a bad puntuation but i can make better next time.

![about](/assets/css/images/about%20screen.png)

- im very satisfied with the result obtein with the others two sides, i was excited and very proud of.

![Sign up](/assets/css/images/signup%20screen%20test.png)

- i have problem and bugs with the media quarie but could solved in the last moment

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flionelwise77.github.io%2FPP1-The-Alchemist-Cave%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flionelwise77.github.io%2FPP1-The-Alchemist-Cave%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

## all bugs were fixed , i have trouble with some CSS bugs but at the end everything is running well.

## Deployment

The live link can be found here - https://github.com/LionelWise77/PP1-The-Alchemist-Cave/deployments

## Credits

i share my Credits , wiht my Mentor Dick, the tutors from Code Institute and some classmates in slack.

### Content

- The text for the Home page was taken from Wikipedia Article Breatwork
- Instructions on how to implement Breathwork techniques [Specific YouTube channel](https://www.youtube.com/@BreatheWithSandy)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from [photos source](https://www.pexels.com/search/natural/)
