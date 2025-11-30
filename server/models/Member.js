import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  email: String,
  phone: String,
  address: String,
  emergencyContact: String,
  emergencyPhone: String,
  photo: String, // we'll store the filename or URL
  medicalInfo: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Member", memberSchema);
