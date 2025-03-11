const gameSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`Socket ${socket.id} joined room: ${roomId}`);
    });
    socket.on("gameUpdate", (data) => {
      socket.broadcast.emit("gameUpdate", data);
    });
    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};

export default gameSocket;
