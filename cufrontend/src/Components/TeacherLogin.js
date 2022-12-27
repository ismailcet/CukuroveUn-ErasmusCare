import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
const TeacherLogin = () => {
  const navigate = useNavigate();
  const [teacherID, setTeacherID] = useState();
  const [password, setPassword] = useState();

  const submitLogin = async () => {
    console.log(teacherID);
    const response = await axios.post(
      "http://localhost:5000/api/teacher/login",
      {
        teacherID: teacherID,
        password: password,
      }
    );
    if (response.statusText === "OK") {
      const teacher = response.data.teacher;
      localStorage.setItem("tokens", JSON.stringify(response.data.accessToken));
      navigate(`/teacher/${teacher.teacherID}`);
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
            Teacher Id :
          </label>
          <input
            id="Username"
            className="form-input"
            onChange={(e) => setTeacherID(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
