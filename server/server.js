import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import registrationRoutes from "./routes/registration.js";
import playerRoutes from "./routes/player.js";
import gameSocket from "./sockets/gameSocket.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", registrationRoutes);
app.use("/api", playerRoutes);

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

gameSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
