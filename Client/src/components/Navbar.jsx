import React from "react";
import "../styles/Navbar.css";
import { IoAddOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <>
      <div className="nav-container">
        <div className="left-side">
          <button onClick={toggleSidebar}>
            <FaBars className="text-xl" />
          </button>

          <div className="flex items-center justify-center gap-1">
            <div className="icon">
              <img
                className="youtube-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/600px-YouTube_icon_%282013-2017%29.png"
                alt="youtube"
              />
            </div>
            <span className="text-white text-2xl">YouTube</span>
          </div>
        </div>

        <div className="middle-side">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FiSearch className="search-icon" />
          </div>
          <div className="icon" style={{ backgroundColor: "rgb(34, 34, 34)" }}>
            <FaMicrophone className="mic-icon " />
          </div>
        </div>
        <div className="right-side">
          <div className="upload-icon">
            <IoAddOutline style={{ color: "white", fontSize: "20px" }} />
            <span style={{ color: "white", fontSize: "15px" }}>Create</span>
          </div>
          <div className="icon">
            <FaBell className="notification-icon " />
          </div>
          <div className="icon">
            <LuCircleUserRound className="user-icon " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
