const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors")
const app = express();
const server = createServer(app);
//imp
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        method: ["GET", "POST"],
        credentials: true,
    },
});

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

io.on("connection", (socket) => {
    console.log("user is connected");
    console.log("user id - ", socket.id);
    socket.broadcast.emit("welcome", "welcome to the server");
})

module.exports = server;
