# Week 5 – Firebase Firestore Integration & Real-Time Messaging

## Objective
The goal of this week was to connect the chat application with Firebase Firestore to enable real-time communication and persistent data storage.

## Features Implemented

### Firebase Firestore Setup
- Created a Firestore Database in Firebase Console.
- Configured Firestore in the React application.
- Connected the project using Firebase SDK.

### Firestore Collections
Designed the following database structure:

rooms/
   roomId/
      messages/
         messageId

users/
   userId

Each message stores:
- Message text
- Sender ID
- Sender Name
- Sender Profile Photo
- Timestamp

Each user stores:
- Name
- Email
- Photo URL
- Last Seen

### User Management
- Automatically creates or updates a user document on first login.
- Stores latest user information.

### Sending Messages
Implemented Firestore's `addDoc()` to:
- Send text messages
- Store sender details
- Store timestamps

### Receiving Messages
Used Firestore's `onSnapshot()` listener to:
- Receive new messages instantly
- Update chat in real time
- Remove the need for refreshing the page

### Message Ordering
Messages are sorted using:
- `orderBy("timestamp")`

This ensures chronological ordering.

### Auto Scroll
Implemented automatic scrolling whenever a new message arrives.

### Loading State
Added a loading indicator while Firestore data is being fetched.

---

## Technologies Used

- React
- Firebase Firestore
- Firebase Authentication
- React Hooks
- JavaScript

---

## Learning Outcomes

- Firebase Firestore
- Real-time databases
- React useEffect
- Firestore listeners
- CRUD Operations
- React state management
