import React from "react";
import Login from "../Components/Login";
import ChangePassword from "../Components/ChangePassword";
import Announcements from "../Components/Announcements";
const Home = () => {
  return (
    <section className="home flex px-[1rem] w-[1170px] justify-center gap-4 my-0 mx-auto">
      <Login />
      <Announcements />
    </section>
  );
};

export default Home;
