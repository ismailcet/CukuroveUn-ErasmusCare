import React from "react";
import profileImg from "../assets/profile.jpg";

const StudentInfo = ({ user }) => {
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
        </div>
      </div>
    </section>
  );
};

export default StudentInfo;
