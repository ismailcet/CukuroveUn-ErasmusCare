const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");

dotenv.config({ path: process.cwd() + "/.env" });

const studentRouter = require("./routes/student");
const authRouter = require("./routes/auth");
const teacherRouter = require("./routes/teacher");

const app = express();

dotenv.config();

// Middlewares
mongoose.set("strictQuery", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

mongoose
  .connect("mongodb://localhost/erasmusDB")
  .then(() => console.log("Connect To DB"));

app.use(cors());
app.use("/api/students", studentRouter);
app.use("/api", authRouter);
app.use("/api/teacher", teacherRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running 5000 Port");
});
