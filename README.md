# 🩸 RedPulse – Blood Request Management System

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)
![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-green?logo=springboot)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange?logo=mysql)
![License](https://img.shields.io/badge/License-Educational-lightgrey)

RedPulse is a Full-Stack Blood Request Management System built with **React (TypeScript)** and **Spring Boot**.  
It allows patients to create blood requests, track their status, and enables admins to manage platform users efficiently.

---

## 🌍 Live Demo (Optional)

Frontend: _Add deployed link here_  
Backend API: _Add deployed link here_

---

## 📌 Project Overview

RedPulse provides a structured digital platform for managing blood requests in a secure and organized way.  
The system implements **role-based authentication** and a **responsive modern UI**.

---

## 🚀 Key Features

### 🔐 Authentication & Authorization
- Role-Based Login (Admin / Patient / Helper)
- Protected Routes
- LocalStorage Session Management

### 👤 Patient Module
- Create Blood Request
- View Created Requests
- Track Request Status (Pending / Approved / Rejected)
- Animated & Responsive Tables
- Blinking Status Indicator for Pending Requests

### 🛠 Admin Module
- View Helpers
- View Patients
- Manage System Users

### 🎨 UI/UX Highlights
- Fully Responsive Design
- Animated Tables
- Hover Effects
- Modern Status Badges
- Clean Layout with Built-in CSS

---

## 🏗️ Tech Stack

### Frontend
- React
- TypeScript
- Axios
- React Router DOM
- CSS (Built-in styling)

### Backend
- Spring Boot
- REST APIs
- JPA / Hibernate
- MySQL Database

---

## 📂 Project Structure
RedPulse/
│
├── frontend/
│ ├── components/
│ │ ├── Login.tsx
│ │ ├── AdminDashboard.tsx
│ │ ├── PatientDashboard.tsx
│ │ ├── CreateBloodRequest.tsx
│ │ └── ViewCreatedRequests.tsx
│ └── App.tsx
│
├── backend/
│ ├── controller/
│ ├── service/
│ ├── entity/
│ └── repository/


---

## 🔌 API Endpoints

### 🩸 Blood Request APIs

| Method | Endpoint |
|--------|----------|
| POST   | `/Redpluse/request/create/{patientId}` |
| GET    | `/Redpluse/request/allrequests` |

### 👥 User APIs

| Method | Endpoint |
|--------|----------|
| GET    | `/helpers` |
| GET    | `/patients` |

---

## ⚙️ Installation Guide

### 🔹 Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/Saurabh4611/redpulse.git

## 2 . Configure application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/redpulse
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

## 3.Run the Spring Boot application.

Backend runs on: "http://localhost:8080"

🔹 Frontend Setup

Navigate to frontend directory:

cd frontend

Install dependencies:

npm install

Start development server:

npm run dev

Frontend runs on:

http://localhost:5173
📱 Responsive Design

Mobile-friendly layout

Animated status badges

Hover row effects

Clean card-style mobile table layout



🚀 Future Improvements

JWT Authentication

Pagination

Search & Filtering

Email Notifications

Real-Time Updates

Blood Inventory Module

Dashboard Analytics

🧠 What This Project Demonstrates

Full-Stack Development

REST API Integration

Role-Based Access Control

React+TypeScript Implementation

Responsive UI Design

Clean Component Architecture