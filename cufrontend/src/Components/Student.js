import React from "react";
import profileImg from "../assets/profile.jpg";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
const Student = ({ user }) => {
  const navigate = useNavigate();

  const logout = (e) => {
    localStorage.setItem("tokens", "");
    navigate("/");
  };
  return (
    <section className="login w-2/6">
      <div className="login-content flex flex-col">
        <div className="profile-image flex justify-center mb-[2rem]">
          <img
            src={profileImg}
            alt="Profile Img"
            className="profileImg w-[200px] h-[200px] object-cover rounded-[5px]"
          />
        </div>
        <div className="student-info">
          <div className="info-title">Öğrenci Bilgileri</div>
          <table className="table w-full rounded-[3px] text-[10px]">
            <tbody>
              <tr>
                <td>Öğrenci no:</td>
                <td>{user.studentID}</td>
              </tr>
              <tr>
                <td>İsim:</td>
                <td>
                  {user.name} {user.surname}
                </td>
              </tr>
              <tr>
                <td>E-posta adresi</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Okula giriş yılı</td>
                <td>{user.enteredYear}</td>
              </tr>
              <tr>
                <td>Örgün türü</td>
                <td>{user.type}</td>
              </tr>
            </tbody>
          </table>
          <div className="buttons flex justify-between items-center text-[#31708f;]">
            <a className="exit" onClick={(e) => logout(e)}>
              Çıkış
            </a>
            <Link to="/password-change" className="changePass">
              Şifre Değiştir
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
