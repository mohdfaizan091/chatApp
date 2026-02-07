# Real-Time Chat Application using Socket.IO

## Overview

This project is a **real-time chat application** built using **Node.js, Express, Socket.IO, and React (Vite)**.

The main purpose of this project is to **deeply understand real-time communication** concepts, especially:
- How Socket.IO works internally
- How messages are sent using `emit`
- How messages are received using `on`
- How a single message is delivered to all connected clients in real time

This project focuses more on **core real-time logic** than UI complexity.

---

## Tech Stack

### Backend
- Node.js
- Express
- Socket.IO
- HTTP Server

### Frontend
- React (Vite)
- socket.io-client

---

## Core Concepts Learned

### 1. What is Socket.IO?

Socket.IO enables **real-time, bidirectional communication** between client and server.

Unlike HTTP (request–response based), Socket.IO maintains a **persistent connection**, allowing:
- Server to push data to client anytime
- Client to send data without refreshing the page

---

### 2. Socket Connection Lifecycle

#### Server Side
```js
io.on("connection", (socket) => {
  console.log("user connected:", socket.id);
});
