import React from "react";
import Logo from "../assets/logo_en.svg";

const Header = () => {
  return (
    <header className="header h-40 bg-[#00421c] mb-[18px] text-white text-center rounded-[10px] flex items-center justify-center gap-4">
      <div className="header-img">
        <img src={Logo} alt="Logo" className="w-[100px] h-[100px]" />
      </div>
      <div className="header-info">
        <h1 className="title text-[2rem]">CUKUROVA UNIVERSITY</h1>
        <h3 className="page-name text-[2rem] uppercase">Erasmus care</h3>
      </div>
    </header>
  );
};

export default Header;
