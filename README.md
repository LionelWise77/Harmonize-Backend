# 🎵 Harmonize - Task Management API

The **Harmonize API** is a RESTful backend service built with **Django** and **Django REST Framework**, providing secure, token-based user authentication and full **CRUD functionality** for task management. It supports frontend integration, filtering, validations, and Heroku deployment.

---

## 📌 Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Endpoints](#endpoints)
5. [Example Requests](#example-requests)
6. [Technologies Used](#technologies-used)
7. [Testing](#testing)
8. [Agile Development](#Agile)
9. [Deployment](#deployment)
10. [Credits](#credits)

---

## ✨ Features

✔ **JWT Authentication** (Register, Login, Token refresh)  
✔ **CRUD operations** for user-specific tasks  
✔ **Task Filtering** by priority, due date, status  
✔ **Validation** to prevent past dates and invalid logic  
✔ **CORS configuration** for frontend connection  
✔ **Environment-based configuration** using `.env`  
✔ **Deployed on Heroku with PostgreSQL**

---

## ⚙️ Installation

<!-- prettier-ignore -->
```bash
git clone https://github.com/LionelWise77/harmonize-backend.git
cd harmonize-backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables in .env
DEBUG=True
SECRET_KEY=your_secret
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3  ....

# Run migrations and start server
python manage.py migrate
python manage.py runserver

## 🚀 Usage

Once running, the API is available at: http://127.0.0.1:8000/api/

## Endpoints

## 🔐 Authentication Endpoints

| Method | Endpoint | Description               |
|--------|----------|---------------------------|
| POST   | /api/register/        | Register a new user            |
| POST   | /api/token/           | Obtain JWT tokens              |
| POST   | /api/token/refresh/   | Refresh access token           |

---

## 📝 Tasks Endpoints

| Method | Endpoint             | Description                   |
|--------|----------------------|-------------------------------|
| GET    | /api/tasks/          | List user's tasks             |
| POST   | /api/tasks/          | Create a new task             |
| GET    | /api/tasks/<id>/     | Retrieve specific task        |
| PUT    | /api/tasks/<id>/     | Update task                   |
| DELETE | /api/tasks/<id>/     | Delete task                   |

---

## 🧪 Example Requests

### 🔧 Create a Task

```http
POST /api/tasks/
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "title": "Complete README",
  "description": "Write the full documentation.",
  "due_date": "2025-06-25",
  "priority": "high",
  "status": "open"
}

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
````

---

## Technologies Used

## 🛠️ Technologies Used

- **Python 3.12**
- **Django 4.x**
- **Django REST Framework**
- **djangorestframework-simplejwt**
- **PostgreSQL**
- **Cloudinary Storage** (optional)
- **Heroku**
- **CORS Headers**
- **Gunicorn**

---

## Install Dependencies

- pip install -r requirements.txt

## ✅ Testing

| Feature                  | Action          | Expected Result      | Status |
| ------------------------ | --------------- | -------------------- | ------ |
| Register user            | POST /register/ | User created (201)   | ✅     |
| Login                    | POST /token/    | Token received (200) | ✅     |
| Invalid login            | POST /token/    | 401 Unauthorized     | ✅     |
| Create task (valid)      | POST /tasks/    | 201 Created          | ✅     |
| Create task (past date)  | POST /tasks/    | 400 Bad Request      | ✅     |
| Edit another user’s task | PUT /tasks/:id  | 403 Forbidden        | ✅     |

---

## Running Tests for the API

1. **Test Task List**: Verifies that the API correctly returns the list of tasks with a `200 OK` response.
2. **Test Task Creation**: Verifies that a new task can be created successfully with a `201 Created` response.
3. **Test Unauthorized Task Creation**: Verifies that an unauthenticated user cannot create a task, returning a `401 Unauthorized` response.

To run the tests:

```bash
python manage.py test

## test Results

Running tests...
{'access': 'your_access_token'}
Fetched tasks: {'count': 0, 'results': []}
.
----------------------------------------------------------------------
Ran 3 tests in 13.796s

OK


## 🧠 Agile Development (Backend)

We applied the same **Agile methodology** to the backend. Using **GitHub Projects**, we managed features and fixes through **epics**, **user stories**, and links to issues.

### 🧰 Tools Used

- GitHub Projects (Kanban or Team Planning)
- GitHub Issues
- Labels: `backend`, `feature`, `bug`, `validation`, etc.

---

## 📁 Epics Overview

- **EP01 - API Authentication & Security**
- **EP02 - Task API (CRUD & Filtering)**
- **EP03 - Data Validation & Error Handling**
- **EP04 - Deployment & CI**

---

## 🧑‍💼 User Stories (Backend API)

1. As a user, I want to register and log in via the API with JWT tokens to securely send requests.
2. As a user, I want to create, read, update, and delete tasks through the API.
3. As a user, I want API responses to include validation errors when I send invalid data.
4. As a user, I want to be forbidden (403) from accessing tasks that are not mine.
5. As a user, I want the API to prevent creating tasks with past due dates or invalid times.
6. As a user, I want the API to return formatted task data, including priority and status.

---

## 🐞 Known Bugs (Backend)

7. As a developer, I want the API to accept `00:00` for times so it doesn't reject valid midnight stakes.
8. As a developer, I want the API to return 404 when a user tries to access another user’s task.
9. As a developer, I want clearer error messages when token authentication fails.

---

## 🚀 Deployment

### 🔗 Live App:

[https://harmonize-backend-6405d8cae271.herokuapp.com/](https://harmonize-backend-6405d8cae271.herokuapp.com/)

---

## 🧼 Known Issues

- Minor **PEP8 formatting issues** – will be linted and cleaned before final delivery.
- Previously allowed **rapid double-submissions** – this has been patched.
- Some **edge-case errors** may lack detailed user feedback – improvements planned for UX clarity.

---

## 🙏 Credits

Special thanks to:

- The **tutors and support team at Code Institute**
- The **Slack community** for feedback and motivation
- The official **Django and DRF documentation** for technical guidance
- All **project reviewers** who provided constructive feedback

```

```

```
