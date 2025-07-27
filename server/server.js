const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log("MongoDB connection failed : ", err));

app.use('/api/todos', todoRoutes);

io.on("connection", (socket) => {
    console.log("Socket connected: ", socket);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});