# Harmonize - Task Management API

Harmonize is a task management application designed to help users organize and prioritize their daily tasks efficiently. This backend provides a REST API for managing tasks and integrates key features such as user authentication, task filtering, and prioritization.

---

## Table of Contents

1. [Features](#features)
2. [Visual Overview](#visual-overview)
3. [Usage](#usage)
4. [Endpoints](#endpoints)
   - [Tasks](#tasks)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [Testing](#testing)
8. [Unfixed Bugs](#unfixed-bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Content](#content)
12. [Media](#media)

---

## Features

- **Task Management**: Create, update, delete, and view tasks.
- **Prioritization**: Assign priorities to tasks (low, medium, high).
- **Deadline Tracking**: Mark tasks as overdue based on deadlines.
- **Categories**: Organize tasks into customizable categories.
- **User Authentication**: Secure login and registration for managing tasks.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **Random Motivational Quotes**: Get inspired each time you use the app.

---

## Visual Overview

### Header

![Header](/assets/images/harmonize-header.png)

- The header displays the name of the **Harmonize** task management application, using the primary color scheme for consistency.
- This section enables users to navigate seamlessly between pages across all devices, without relying on the browser's 'back' button.

---

### Landing Page (Hero Section)

![Hero](/assets/images/harmonize-hero.png)

- The landing page features an inspirational background image with an overlay of motivational text to immediately engage the user.
- This section invites users to take control of their tasks and improve their productivity in a visually appealing way.

---

### Benefits Section

![Benefits](/assets/images/harmonize-benefits.png)

- This section highlights the benefits of using **Harmonize**, such as improved productivity, better task organization, and reduced stress by staying on top of deadlines.
- The benefits are designed to resonate with users looking for a streamlined task management solution.

---

### Footer

![Footer](/assets/images/harmonize-footer.png)

- The footer includes links to relevant social media platforms for **Harmonize**, allowing users to stay updated with app news and community tips.
- All links open in a new tab, ensuring smooth navigation while keeping the user's progress on the site intact.
- The footer encourages users to connect and engage with the **Harmonize** community for shared productivity insights.

---

## Usage

1. Start the backend server:
   ```bash
   python manage.py runserver
   ```
2. Start the frontend development server:
   ```bash
   npm start
   ```
3. Access the app in your browser at `http://localhost:3000`.

---

---

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

- **Frontend**: React, Axios, HTML5, CSS3
- **Backend**: Django REST Framework, Python
- **Database**: PostgreSQL
- **Hosting**: Heroku for backend, Netlify for frontend
- **Version Control**: Git & GitHub

---

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
