# Week 7 – Image Sharing, Emoji Picker & Dark Mode

## Objective

Improve the overall user experience by adding multimedia support and UI enhancements.

---

## Features Implemented

### Image Upload

Originally planned using Firebase Storage.

Due to Firebase Storage limitations on the free plan, Cloudinary was integrated instead.

Implemented:

- Image selection
- Image upload
- Cloudinary integration
- Secure URL retrieval
- Image message storage in Firestore

Each image message stores:

- type = image
- imageURL

---

### Image Rendering

Updated MessageBubble component.

If:

type == "image"

Display image.

Otherwise:

Display text message.

---

### Upload Loader

Displayed a loading indicator while image upload is in progress.

---

### Emoji Picker

Installed:

npm install emoji-picker-react

Implemented:

- Emoji button
- Emoji picker popup
- Insert emoji into message input

---

### Dark Mode

Implemented:

- Theme Toggle Button
- CSS Variables
- Local Storage

User preference is saved and restored automatically.

---

### Responsive Improvements

Improved layouts for:

- Desktop
- Tablet
- Mobile

Adjusted:

- Sidebar
- Chat Area
- Message Width
- Input Section

---

## Technologies Used

- Cloudinary
- React
- Emoji Picker
- CSS Variables
- Local Storage

---

## Learning Outcomes

- Third-party APIs
- Image Hosting
- Theme Management
- Responsive Design
- UX Improvements
