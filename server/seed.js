import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/Student.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Student.insertMany([
    { regdNo: "1001", name: "Amit Kumar", marks: 85, result: "Pass" },
    { regdNo: "1002", name: "Sneha Das", marks: 45, result: "Pass" },
    { regdNo: "1003", name: "Rohit Singh", marks: 32, result: "Fail" },
  ]);
  console.log("✅ Sample students inserted");
  process.exit();
});
