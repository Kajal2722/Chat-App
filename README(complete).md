# 💬 Real-Time Chat Application

A full-stack real-time chat application built over **8 weeks** using **React.js**, **Firebase**, **Cloudinary**, and **Firebase Hosting**. The project evolved from a static HTML/CSS interface into a production-ready web application featuring Google Authentication, real-time messaging, chat rooms, online/offline presence, image sharing, emoji support, dark mode, secure Firestore rules, and cloud deployment.

---

# 🚀 Live Demo

https://chat-app-a05de.web.app

---

# 📂 GitHub Repository

🔗 https://github.com/Kajal2722/Chat-App

---

# 📖 Project Overview

The objective of this project was to understand the complete lifecycle of developing a modern real-time web application. Every feature was implemented incrementally, allowing hands-on experience with frontend development, React component architecture, Firebase backend services, authentication, database design, deployment, and production best practices.

---

# ✨ Features

- Google Authentication
- Real-Time Messaging
- Multiple Chat Rooms
- Online/Offline User Presence
- Image Sharing
- Emoji Picker
- Dark Mode
- Responsive Mobile Design
- Firestore Database
- Firebase Realtime Database
- Cloudinary Image Upload
- Secure Firestore Rules
- Firebase Hosting Deployment

---

# 🛠 Tech Stack

## Frontend

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- React Router DOM

## Backend & Cloud

- Firebase Authentication
- Firebase Firestore
- Firebase Realtime Database
- Firebase Hosting

## Third Party Services

- Cloudinary
- Emoji Picker React

## Version Control

- Git
- GitHub

---

# 📅 Weekly Progress

---

# 📌 Week 1 – UI Design using HTML & CSS

## Objective

Design the complete user interface before adding functionality.

## Work Completed

- Created two-column chat layout
- Sidebar containing:
  - User profile
  - Search section
  - Contact list
- Chat Area containing:
  - Header
  - Message section
  - Input area
- Built message bubbles
- Styled sent and received messages separately
- Used Flexbox for responsive layout

## Learning

- HTML Layout
- CSS Flexbox
- UI Structuring
- Component Planning

---

# 📌 Week 2 – JavaScript Functionality

## Objective

Make the static interface interactive using Vanilla JavaScript.

## Work Completed

- Selected DOM elements using querySelector()
- Implemented Send Button functionality
- Added Enter key support
- Dynamically created messages
- Appended messages using appendChild()
- Added timestamps
- Cleared input after sending
- Auto-scroll to latest message
- Mobile responsive layout

## Learning

- DOM Manipulation
- Event Listeners
- JavaScript Objects
- Dynamic HTML
- Responsive Design

---

# 📌 Week 3 – React Component Architecture

## Objective

Convert the application into reusable React components.

## Work Completed

Created Components:

- Sidebar
- ChatWindow
- MessageBubble
- MessageInput

Integrated components into App.jsx.

Used props for passing data between components.

## Learning

- React Basics
- Functional Components
- JSX
- Props
- Component Reusability

---

# 📌 Week 4 – Firebase Authentication

## Objective

Integrate Google Authentication and protect the application.

## Work Completed

- Created Firebase Project
- Connected Firebase SDK
- Installed Firebase
- Enabled Google Authentication
- Created AuthContext
- Built Login Page
- Implemented Protected Routes
- Displayed user information after login
- Stored authentication state

## Learning

- Firebase Authentication
- React Context API
- Protected Routes
- Authentication Flow

---

# 📌 Week 5 – Firestore Database Integration

## Objective

Build a real-time messaging backend.

## Work Completed

- Created Firestore Database
- Designed database collections

Collections:

users/

rooms/

rooms/{roomId}/messages/

Stored:

- Message
- Sender Name
- Sender ID
- Sender Photo
- Timestamp

Implemented:

- addDoc()
- onSnapshot()
- orderBy()
- Auto Scroll
- Loading State

Messages now update instantly without refreshing.

## Learning

- Firestore
- CRUD Operations
- Real-Time Listeners
- React Hooks
- Database Design

---

# 📌 Week 6 – Chat Rooms & Online Presence

## Objective

Support multiple chat rooms and user presence detection.

## Work Completed

### Chat Rooms

- Installed React Router
- Dynamic Routes
- Created Room List
- Created New Rooms
- Room Navigation

### Online Presence

Used Firebase Realtime Database.

Implemented:

- Online Status
- Offline Status
- Automatic Disconnect Detection
- Last Seen Updates

Displayed online/offline indicator beside users.

## Learning

- React Router
- URL Parameters
- Realtime Database
- Presence System

---

# 📌 Week 7 – Advanced Features

## Objective

Improve user experience.

## Work Completed

### Image Upload

Integrated Cloudinary.

Implemented:

- Image Selection
- Upload Progress
- Image URLs
- Image Messages

### Emoji Picker

- Installed emoji-picker-react
- Emoji Button
- Emoji Selection

### Dark Mode

Implemented:

- Theme Toggle
- CSS Variables
- Local Storage
- Theme Persistence

### Responsive Improvements

Optimized:

- Mobile Layout
- Tablet View
- Sidebar
- Chat Window

## Learning

- Third-party APIs
- Cloudinary
- Theme Management
- UX Design

---

# 📌 Week 8 – Production Ready

## Objective

Secure and deploy the application.

## Work Completed

### Firestore Security Rules

Configured:

- Authenticated Reads
- Authenticated Writes
- Sender Verification
- Blocked Unauthorized Updates

Verified rules using Firebase Rules Playground.

### Environment Variables

Moved Firebase configuration into:

.env

Updated firebase.js.

Added .env to .gitignore.

### Deployment

Installed Firebase CLI.

Executed:

- firebase login
- firebase init hosting
- npm run build
- firebase deploy

Successfully deployed to Firebase Hosting.

## Learning

- Firestore Security
- Deployment
- Environment Variables
- Production Workflow

---

# 📊 Firebase Architecture

Authentication

↓

Firestore

├── Users

├── Rooms

└── Messages

↓

Realtime Database

└── Online Status

↓

Cloudinary

└── Image Storage

↓

Firebase Hosting

---

# 📸 Screenshots

## Login Screen
<img width="1600" height="861" alt="WhatsApp Image 2026-07-19 at 11 52 02 AM" src="https://github.com/user-attachments/assets/e86b9246-0357-4e9f-9a9f-e9c469818494" />


---

## Chat Window

****<img width="1600" height="865" alt="WhatsApp Image 2026-07-19 at 11 53 24 AM" src="https://github.com/user-attachments/assets/c79e8276-aebe-46c6-9e44-cc2f6afde809" />

---

## Mobile View
<img width="720" height="1600" alt="WhatsApp Image 2026-07-19 at 11 55 00 AM" src="https://github.com/user-attachments/assets/b71bceac-29ea-4836-ab63-b8cd5d41458c" />


---

## Dark Mode

<img width="1600" height="845" alt="WhatsApp Image 2026-07-19 at 11 53 53 AM" src="https://github.com/user-attachments/assets/13a28676-099a-458c-8b17-b1bbe886b541" />


---

# 🎥 Demo Video

https://1drv.ms/v/c/736546365c43ace0/IQDgi23qN0N_QbAVRUGdeEDKAYraq_U1qtNwqHoee5REpzw?e=haJ7BC

---

# 🚀 Future Improvements

- Message Reactions
- Typing Indicator
- Read Receipts
- Voice Messages
- Video Calling
- Push Notifications
- Private Chats
- Message Search
- Delete/Edit Messages
- File Sharing

---

# 📚 Key Concepts Learned

- HTML
- CSS
- Flexbox
- Responsive Design
- JavaScript DOM
- React
- Components
- Props
- Context API
- React Router
- Firebase Authentication
- Firestore
- Realtime Database
- Cloudinary
- Firebase Hosting
- Firestore Security Rules
- Environment Variables
- Deployment
- Git & GitHub
---
Kajal Gupta
B.Tech – Metallurgical & Materials Engineering
Indian Institute of Technology Bombay
GitHub: https://github.com/Kajal2722
