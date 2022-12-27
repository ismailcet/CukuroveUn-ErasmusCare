import React from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Teacher = ({ user }) => {
  const navigate = useNavigate();
  const logout = (e) => {
    localStorage.setItem("tokens", "");
    navigate("/");
  };
  return (
    <section className="login w-2/6">
      <div className="login-content flex flex-col">
        <div className="profile-image flex justify-center mb-[2rem]"></div>
        <div className="student-info">
          <div className="info-title">Öğretmen Bilgileri</div>
          <table className="table w-full rounded-[3px] text-[10px]">
            <tbody>
              <tr>
                <td>Öğretmen no:</td>
                <td>{user.teacherID}</td>
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
            </tbody>
          </table>
          <div className="buttons flex justify-between items-center text-[#31708f;]">
            <a className="exit" onClick={(e) => logout(e)}>
              Çıkış
            </a>
            <Link to="/password-change">
              {" "}
              <a className="changePass">Şifre Değiştir</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
