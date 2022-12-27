const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    studentID: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gpa: { type: Number, required: true },
    levelLanguage: { type: Number, required: true },
    enteredYear: { type: String },
    type: { type: String },
    files1: { type: Boolean, default: false },
    files2: { type: Boolean, default: false },
    teacherSubmit: { type: Boolean, default: false },
    country: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
