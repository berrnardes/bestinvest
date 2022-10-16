import React from "react";
import Logo from "./assets/logo.svg";
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";

function Sidebar() {
  const style = {
    sidebarContainer: "font-bold bg-gray-900 h-screen flex flex-col text-white",
    logo: "flex flex-row py-10 px-2 items-center",
    logoText:
      "ml-2 font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-[#087CFA] to-[#293896]",
    sidebarUl: "flex flex-col w-full",
    sidebarItem: "py-2 ml-10 text-sm block",
    sidebarItemIcon: "text-xl float-left mr-3",
    link: "w-full",
  };

  return (
    <div className={style.sidebarContainer}>
      <div className={style.logo}>
        <img src={Logo} alt="" width={30} />
        <h1 className={style.logoText}>Inner Invest</h1>
      </div>

      <ul className={style.sidebarUl}>
        <li className={style.sidebarItem}>
          <a href="#" className={style.link}>
            <span className={style.sidebarItemIcon}>
              <AiOutlineHome />
            </span>
            Home
          </a>
        </li>
        <li className={style.sidebarItem}>
          <a href="#">
            <span className={style.sidebarItemIcon}>
              <TbLayoutDashboard />
            </span>
            Dashboard
          </a>
        </li>
        <li className={style.sidebarItem}>
          <a href="#">Info</a>
        </li>
        <li className={style.sidebarLi}>
          <a href="#">Account</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
