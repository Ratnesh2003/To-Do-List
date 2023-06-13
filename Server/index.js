import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url"; 

import sequelize from "./configs/dbConfig.js";

import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/task.js"


// CONFIGS
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirName, 'public/assets')));

// Routes
app.use("/auth", authRoutes);
app.use("/", taskRoutes);


// MYSQL Connection
sequelize.authenticate()
.then(() => {
    console.log("Connected to DB");
})

sequelize.sync({force: false})
.then(() => {
    console.log("Sync successful");
})

// Server starting configuration
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})