const router = require("express").Router();
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

const Student = require("../models/Student");

//Login
router.post("/login", async (request, response) => {
  try {
    const student = await Student.findOne({
      studentID: request.body.studentID,
    });

    !student && response.status(401).json("Wrong credantials");

    student.password !== request.body.password &&
      response.status(401).json("Wrong Credentials!");

    const accessToken = jwt.sign(
      {
        id: student.studentID,
        isName: student.name,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    // response.cookie("jwt", accessToken, {
    //   httpOnly: true,
    //   sameSite: "None",
    // });

    response.status(200).json({ accessToken, student });

    //response.status(200).json({ student, accessToken });
  } catch (error) {
    response.status(400).json(error);
  }
});

module.exports = router;
