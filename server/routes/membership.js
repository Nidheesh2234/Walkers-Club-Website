import express from "express";
import multer from "multer";
import Member from "../models/Member.js";

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST /api/membership
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const memberData = {
      ...req.body,
      photo: req.file ? req.file.filename : null,
    };

    const newMember = new Member(memberData);
    await newMember.save();

    res.status(200).json({ message: "Membership application submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting application" });
  }
});

export default router;
