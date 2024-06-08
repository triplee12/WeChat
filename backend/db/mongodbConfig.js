const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config()

const connectToMongoDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully")
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = connectToMongoDB;