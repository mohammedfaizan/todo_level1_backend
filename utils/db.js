import mongoose from "mongoose";
import "dotenv/config";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDb connected..."))
    .catch((err) => {
      console.log("Error whle connecting mongoDB", err);
    });
};

export default db;
