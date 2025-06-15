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
8. [Deployment](#deployment)
9. [Credits](#credits)

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
DATABASE_URL=sqlite:///db.sqlite3  # or your PostgreSQL URL

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

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flionelwise77.github.io%2FPP1-The-Alchemist-Cave%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flionelwise77.github.io%2FPP1-The-Alchemist-Cave%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

## all bugs were fixed , i have trouble with some CSS bugs but at the end everything is running well.

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
