import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  regdNo: String,
  name: String,
  marks: Number,
  result: String
});

export default mongoose.model("Student", studentSchema);
