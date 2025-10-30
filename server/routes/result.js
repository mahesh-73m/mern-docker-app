import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// API to find result by regd number
router.get("/result/:regdNo", async (req, res) => {
  try {
    const student = await Student.findOne({ regdNo: req.params.regdNo });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
