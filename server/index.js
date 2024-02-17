const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});
app.use(cors());
io.on("connection", (socket) => {
  console.log(`User ${socket.id} has connected`);

  socket.on("send-message", (data) => {
    console.log(data);
    socket.broadcast.emit("recieve-message", data)
  });
});

server.listen(3001, () => {
  console.log("server is running");
});
