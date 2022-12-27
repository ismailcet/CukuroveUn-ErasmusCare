import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState();
  const [password, setPassword] = useState();

  // const submitLogin = () => {
  //   const user = studentList.filter(
  //     (student) => student.studentNumber === studentId
  //   );
  //   if (user.length == 0) {
  //     alert("Geçersiz Öğrenci Numarası ! ");
  //   } else {
  //     if (user[0].password === password) {
  //       navigate(`/student/${user[0].studentNumber}`);
  //     } else {
  //       alert("Parolanızı Hatalı Girdiniz ! ");
  //     }
  //   }
  // };
  const submitLogin = async () => {
    const response = await axios.post("http://localhost:5000/api/login", {
      studentID: studentId,
      password: password,
    });
    if (response.statusText === "OK") {
      const student = response.data.student;
      localStorage.setItem("tokens", JSON.stringify(response.data.accessToken));
      navigate(`/student/${student.studentID}`);
    }
  };
  return (
    <div className="login w-2/6">
      <div className="login-content flex flex-col items-center">
        <div className="login-title ">
          <h2 className="my-[20px] text-[24px] text-[#31708f]">Login</h2>
        </div>
        <div className=" flex flex-col w-full">
          <label
            htmlFor="Username"
            className="text-[#31708f] mb-[5px] font-bold"
          >
            Student Number :
          </label>
          <input
            id="Username"
            className="form-input"
            onChange={(e) => setStudentId(e.target.value)}
          />
          <label
            htmlFor="Password"
            className="text-[#31708f] mb-[5px] font-bold"
          >
            Password :
          </label>
          <input
            type="password"
            id="Password"
            className="form-input mb-[2rem]"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-login" onClick={() => submitLogin()}>
            Login / Giriş
          </button>
          <Link
            to="/password-change"
            className="btn-sign"
            style={{ textAlign: "center" }}
          >
            <button className="btn btn-sign">
              Forgot Password / Şifre Değiştir
            </button>
          </Link>
          <Link
            to="/teacher/login"
            className="btn btn-login"
            style={{ textAlign: "center", marginTop: "5px" }}
          >
            <button>Öğretmen Giriş / Teacher Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
