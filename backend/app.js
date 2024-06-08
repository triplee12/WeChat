// Entry module for weChat
const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes");
const connectToMongoDB = require("./db/mongodbConfig");
dotenv.config()


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
