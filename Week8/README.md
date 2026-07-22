# Week 8 – Security, Deployment & Production Readiness

## Objective

Prepare the application for production by securing Firebase, managing environment variables and deploying the application.

---

## Features Implemented

### Firestore Security Rules

Updated Firestore Rules.

Implemented:

- Only authenticated users can access Firestore.
- Users can only send messages using their own UID.
- Unauthorized updates/deletes are blocked.
- Rules tested using Firebase Rules Playground.

---

### Environment Variables

Created:

.env

Moved Firebase configuration from source code into environment variables.

Added:

.gitignore

to prevent accidental exposure of secrets.

---

### Firebase Hosting

Installed Firebase CLI.

Commands used:

npm install -g firebase-tools

firebase login

firebase init hosting

npm run build

firebase deploy

Successfully deployed the application.

Generated Live URL:

https://chat-app-a05de.web.app

---

### Production Build

Created optimized production build.

Verified:

- Authentication
- Firestore
- Image Upload
- Online Presence
- Chat Rooms

after deployment.

---

### GitHub Repository

Organized the repository into weekly folders.

Added:

- README
- Screenshots
- Documentation

---

## Technologies Used

- Firebase Hosting
- Firestore Security Rules
- Environment Variables
- GitHub
- Firebase CLI

---

## Learning Outcomes

- Application Security
- Deployment Workflow
- Environment Configuration
- Production Builds
- Version Control
