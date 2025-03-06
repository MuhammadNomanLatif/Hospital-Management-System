import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./mongoDB/db.js";
import { signup } from "./controllers/userController.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

dbConnection();

app.use("/signup", signup);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
