import express from "express";
import dotenv from "dotenv";

// Configs
const app = express();
dotenv.config();


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})