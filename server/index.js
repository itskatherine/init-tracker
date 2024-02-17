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
  const { id } = socket;
  console.log(`User ${id} has connected`);
  socket.on("add-player", ({ newPlayer }) => {
    const newPlayerWithId = { ...newPlayer, id };
    socket.broadcast.emit("player-added", { newPlayerWithId });
  });
});

server.listen(3001, () => {
  console.log("server is running");
});
