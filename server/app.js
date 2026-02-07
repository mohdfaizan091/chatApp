const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

io.on("connection", (socket) => {
  
    socket.broadcast.emit("welcome", "welcome to the server");

  // chat message
  socket.on("message", (msg) => {
    io.emit("message", msg); 
  });

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
  });
});

module.exports = server;
