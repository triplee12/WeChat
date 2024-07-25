// Entry module for weChat
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const messageRouter = require("./routes/messageRoutes");
const connectToMongoDB = require("./db/mongodbConfig");
const { app, server } = require("./socket/socket");
dotenv.config()

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/messages", messageRouter);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
