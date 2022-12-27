const router = require("express").Router();
const { findOne } = require("../models/Student");
const Student = require("../models/Student");

//Get All Students
router.get("/", async (request, response) => {
  try {
    console.log(request.cookies);
    const users = await Student.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(400).json(error);
  }
});

//Get By Id
router.get("/find/:id", async (request, response) => {
  try {
    const student = await Student.findOne({ studentID: request.params.id });
    response.status(200).json(student);
  } catch (error) {
    response.status(400).json(error);
  }
});

//Add Student
router.post("/", async (request, response) => {
  const newUser = new Student({
    name: request.body.name,
    surname: request.body.surname,
    studentID: request.body.studentID,
    email: request.body.email,
    password: request.body.password,
    gpa: request.body.gpa,
    levelLanguage: request.body.levelLanguage,
    enteredYear: request.body.enteredYear,
    type: request.body.type,
  });

  try {
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
  } catch (err) {
    response.status(500).json(err);
  }
});

//Update User
router.put("/:id", async (request, response) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedStudent);
  } catch (error) {
    response.status(400).json(error);
  }
});

//Change Password
router.put("/change/:id", async (request, response) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { studentID: request.params.id },
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedStudent);
  } catch (error) {
    response.status(400).json(error);
  }
});

module.exports = router;
