import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import membershipRoutes from "./routes/membership.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/walkersclub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/membership", membershipRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
