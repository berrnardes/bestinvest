"use strict";
import { useState } from "react";
import { SlGraph } from "react-icons/sl";
import { FiArrowLeft } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineBeaker,
  HiOutlineUserCircle,
  HiOutlineAdjustments,
} from "react-icons/hi";

function Sidebar2() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`h-screen text-center bg-gray-900 ${
        open ? "w-72" : "w-20"
      } p-5 pt-8 duration-200 relative`}
    >
      <FiArrowLeft
        className={`text-3xl rounded-full bg-gray-900 absolute -right-3 cursor-pointer border border-indigo-900 top-9 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      {/* -------Logo-------- */}
      <div className="inline-flex items-center">
        <SlGraph className="text-3xl text-indigo-400 mr-3" />
        <h1
          className={`${
            !open && "scale-0"
          } text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400`}
        >
          BestInvest
        </h1>
      </div>
      {/* --------Search--------- */}
      <div
        className={`${
          !open ? "px-2" : "px-4"
        } flex items-center rounded-md bg-gray-600 py-2 mt-5`}
      >
        <CiSearch
          className={`text-white text-xl block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type={"search"}
          placeholder="Pesquisar"
          className={`${
            !open && "hidden"
          } text-base bg-transparent w-full text-white focus:outline-none`}
        />
      </div>

      {/* Menu Items */}
      <ul className="pt-10">
        <li className="text-gray-400 rounded-sm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-200 mt-2">
          <span className="text-2xl block float-left">
            <HiOutlineHome />
          </span>
          <span className={`${!open && "hidden"}`}>Home</span>
        </li>
        <li className="text-gray-400 rounded-sm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-200 mt-2">
          <span className="text-2xl block float-left">
            <HiOutlineBeaker />
          </span>
          <span className={`${!open && "hidden"} duration-200`}>Dashboard</span>
        </li>
        <li className="text-gray-400 rounded-sm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-200 mt-2">
          <span className="text-2xl block float-left">
            <HiOutlineChartBar />
          </span>
          <span className={`${!open && "hidden"} duration-200`}>
            Relatórios
          </span>
        </li>
        <li className="text-gray-400 rounded-sm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-200 mt-2">
          <span className="text-2xl block float-left">
            <HiOutlineUserCircle />
          </span>
          <span className={`${!open && "hidden"} duration-200`}>Perfil</span>
        </li>
        <li className="text-gray-400 rounded-sm text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-200 mt-2">
          <span className="text-2xl block float-left">
            <HiOutlineAdjustments />
          </span>
          <span className={`${!open && "hidden"} duration-200`}>
            Configurações
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar2;
