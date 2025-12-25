# 💬 Real-Time Chat Application

A lightweight **real-time chat application** built using **HTML, CSS, JavaScript, and WebSockets**.  
The project demonstrates how real-time, bidirectional communication works between a client and a server without page refreshes.

---

## 🚀 Aim
The aim of this project is to understand and implement **real-time communication** on the web using **WebSockets**, enabling instant message delivery between connected users.

This project focuses on **networking fundamentals and event-driven communication** rather than heavy UI frameworks.

---

## 📝 Introduction
Traditional HTTP is request–response based and is not ideal for real-time messaging.  
WebSockets solve this problem by maintaining a **persistent, full-duplex connection** between the client and the server.

This application allows multiple users to:
- Connect to a chat server
- Send messages
- Receive messages instantly in real time

---

## ✨ Features

### ⚡ Real-Time Messaging
- Instant message delivery using WebSockets
- No page refresh required
- Bi-directional communication between client and server

---

### 👥 Multi-User Support
- Multiple users can join the chat simultaneously
- Messages are broadcast to all connected clients
- Simple user identification (username-based)

---

### 🧑‍💻 Simple UI
- Clean HTML/CSS interface
- Scrollable chat window
- Input field for sending messages

---

### 🔌 Connection Handling
- Handles user connections and disconnections
- Displays join/leave events (optional)
- Graceful handling of WebSocket events

---

## 🧱 Tech Stack
- **HTML**
- **CSS**
- **JavaScript**
- **WebSocket API**
- **Node.js (WebSocket Server)**

---

## 📂 Project Structure
```text
realtime-chat/
 ├─ public/
 │   └─ index.html
 ├─ server.js
 ├─ package.json
 └─ README.md
