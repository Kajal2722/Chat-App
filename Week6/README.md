# Week 6 – Chat Rooms & Online Presence

## Objective

Enhance the chat application by introducing multiple chat rooms and displaying users' online/offline status.

---

## Features Implemented

### React Router

Installed:

npm install react-router-dom

Created routes:

- /
- /room/:roomId

Users can now switch between different chat rooms.

---

### Dynamic Chat Rooms

Implemented:

- Room listing from Firestore
- Real-time room updates
- New Room creation
- Room navigation

Each room stores:

- Name
- Created By
- Created At

---

### Dynamic Room Loading

Used:

useParams()

to identify the selected room and load its messages dynamically.

---

### Online / Offline Presence

Enabled Firebase Realtime Database.

Created user status records:

/status/{uid}

Possible states:

- Online
- Offline

---

### Automatic Presence Detection

Used:

- onDisconnect()
- set()

When the browser closes:

- User becomes Offline automatically.

When user logs in:

- Status changes to Online.

---

### Sidebar Presence Indicator

Displayed:

🟢 Online

🔴 Offline

for every user.

---

### Last Seen

Updated Firestore with the user's latest active timestamp.

---

## Technologies Used

- React Router
- Firebase Realtime Database
- Firestore
- React Hooks

---

## Learning Outcomes

- Routing
- URL Parameters
- Firebase RTDB
- Presence System
- Real-time synchronization
