import React from "react";
import TeacherLogin from "../Components/TeacherLogin";
import Announcements from "../Components/Announcements";
const TeacherLoginPage = () => {
  return (
    <section className="home flex px-[1rem] w-[1170px] justify-center gap-4 my-0 mx-auto">
      <TeacherLogin />
      <Announcements />
    </section>
  );
};

export default TeacherLoginPage;
