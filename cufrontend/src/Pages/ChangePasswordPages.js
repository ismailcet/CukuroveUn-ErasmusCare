import React from "react";
import ChangePassword from "../Components/ChangePassword";
import Announcements from "../Components/Announcements";
const ChangePasswordPage = () => {
  return (
    <section className="home flex px-[1rem] w-[1170px] justify-center gap-4 my-0 mx-auto">
      <ChangePassword />
      <Announcements />
    </section>
  );
};

export default ChangePasswordPage;
