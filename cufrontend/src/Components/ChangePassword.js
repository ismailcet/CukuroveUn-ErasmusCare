import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState();
  const [password, setPassword] = useState();

  const submitChange = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:5000/api/students/change/${userID}`,
      {
        password: password,
      }
    );
    if (response.statusText === "OK") {
      alert("Şifreniz Başarılı Bir Şekilde Değişti");
      navigate(`/`);
    }
  };
  return (
    <div className="login w-2/6">
      <div className="login-content flex flex-col items-center">
        <div className="login-title ">
          <h2 className="my-[20px] text-[24px] text-[#31708f]">
            Reset Password
          </h2>
        </div>
        <div className=" flex flex-col w-full">
          <label
            htmlFor="Username"
            className="text-[#31708f] mb-[5px] font-bold"
          >
            ID Number :
          </label>
          <input
            id="Username"
            className="form-input"
            onChange={(e) => setUserID(e.target.value)}
          />
          <label
            htmlFor="newPassword"
            className="text-[#31708f] mb-[5px] font-bold"
          >
            New Password :
          </label>
          <input
            id="newPassword"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="Password"
            className="text-[#31708f] mb-[5px] font-bold"
          >
            Old Password :
          </label>
          <input id="Password" className="form-input mb-[2rem]" />

          <button className="btn btn-login" onClick={(e) => submitChange(e)}>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
