import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://buzzchat-frontend-ytqz.onrender.com"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("connected user", socket.id);

  const userId = socket.handshake.query.userId;
  if(userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap)); //used to send events to all the connected users

  socket.on("disconnect", () => {
    console.log("disconnected user", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server, io };
