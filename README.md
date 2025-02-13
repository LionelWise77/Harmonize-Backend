# 🎵 **Harmonize - Task Management API**

**Harmonize** is a task management system designed to help users organize their daily activities efficiently. This REST API provides full **CRUD functionality**, user authentication, and task filtering, ensuring a seamless task management experience.

---

## 📌 **Table of Contents**

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Endpoints](#endpoints)
   - [Authentication](#authentication)
   - [Tasks](#tasks)
5. [Technologies Used](#technologies-used)
6. [Testing](#testing)
7. [Known Issues](#known-issues)
8. [Deployment](#deployment)
9. [Credits](#credits)

---

## ✨ **Features**

✔ **User Authentication** (Register, Login, Logout, Token-based authentication).  
✔ **Task Management** (Create, Read, Update, Delete tasks).  
✔ **Task Filtering** (Filter by priority, due date, and status).  
✔ **CORS Configuration** (Allows secure communication with the frontend).

---

## ⚙️ **Installation**

Clone this repository:

````bash
git clone https://github.com/lionelwise77/harmonize-api.git
cd harmonize-api


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
````

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

i share my Credits , the tutors from Code Institute and some classmates in slack.
