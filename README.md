# Armatrix Team Page

## Project Overview

This project is a **dynamic Team Page** developed as part of the Software Development Intern assignment for **Armatrix**.

The application allows users to:

* View team members
* Add new team members
* Delete team members
* Access LinkedIn profiles

The project is built using a **full-stack architecture** with a modern frontend and REST API backend.

---

# Tech Stack

## Frontend

* Next.js
* React
* Tailwind CSS
* Framer Motion
* React Icons

## Backend

* FastAPI
* SQLite
* SQLAlchemy

## Deployment

* GitHub (Version Control)
* Render (Backend Hosting)
* Vercel (Frontend Hosting)

---

# Live Links

### Frontend

https://armatrix-team-page.vercel.app

### Backend API

https://armatrix-backend-2r9a.onrender.com/team

### GitHub Repository

https://github.com/bokkuroopareddy-sketch/armatrix-team-page

---

# Features

* Modern responsive UI
* Animated team cards
* Add new team member
* Delete team member
* LinkedIn profile link
* API-based data fetching
* Cloud deployment

---

# Project Structure

armatrix-team-page
│
├── backend
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   └── requirements.txt
│
└── frontend
├── app
│   ├── page.tsx
│   └── team
│       └── page.tsx
├── package.json
└── next.config.js

---

# API Endpoints

GET /team
Fetch all team members

POST /team
Add a new team member

DELETE /team/{id}
Delete a team member

---

# Installation (Local Setup)

Clone the repository

git clone https://github.com/bokkuroopareddy-sketch/armatrix-team-page

---

## Backend Setup

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs at

http://localhost:8000

---

## Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs at

http://localhost:3000

---

# Conclusion

This project demonstrates the implementation of a **full-stack web application** using modern technologies.
The system enables dynamic management of team members while providing a clean and interactive user interface.

---

Developed by
Roopa Reddy
