const router = require("express").Router();
const Teacher = require("../models/Teacher");
const jwt = require("jsonwebtoken");

//Get All Teacher
router.get("/", async (request, response) => {
  try {
    const users = await Teacher.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(400).json(error);
  }
});

//Create Teacher
router.post("/", async (request, response) => {
  const newUser = new Teacher({
    name: request.body.name,
    surname: request.body.surname,
    teacherID: request.body.teacherID,
    email: request.body.email,
    password: request.body.password,
  });

  try {
    const savedUser = await newUser.save();
    response.status(200).json(savedUser);
  } catch (error) {
    response.status(400).json(error);
  }
});

//Get ById Teacher
router.get("/find/:id", async (request, response) => {
  try {
    const teacher = await Teacher.findOne({ teacherID: request.params.id });
    response.status(200).json(teacher);
  } catch (error) {
    response.status(400).json(error);
  }
});

//Teacher Login
router.post("/login", async (request, response) => {
  try {
    const teacher = await Teacher.findOne({
      teacherID: request.body.teacherID,
    });

    !teacher && response.status(401).json("Wrong credantials");

    teacher.password !== request.body.password &&
      response.status(401).json("Wrong Credentials!");

    const accessToken = jwt.sign(
      {
        id: teacher.teacherID,
        isName: teacher.name,
        isTeacher: true,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    response.status(200).json({ accessToken, teacher });
  } catch (error) {
    response.status(400).json(error);
  }
});

//Change Password
router.put("/change/:id", async (request, response) => {
  try {
    const updatedTeacher = await Teacher.findOneAndUpdate(
      { teacherID: request.params.id },
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedTeacher);
  } catch (error) {
    response.status(400).json(error);
  }
});
module.exports = router;
