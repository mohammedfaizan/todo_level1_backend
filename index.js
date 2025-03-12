import express, { Router } from "express";
import "dotenv/config";
import cors from "cors";
import db from "./utils/db.js";
import router from "./routes/task.routes.js";

const app = express();
const port = process.env.PORT;
console.log(port);
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db();

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is connnected on port ${port}`);
});
