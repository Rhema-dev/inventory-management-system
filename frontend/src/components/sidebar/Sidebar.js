import React, { useState } from "react";
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={`layout ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar">
        <div className="top_section">
          <div className="logo" onClick={goHome}>
            <IoIosHome size={35} style={{ cursor: "pointer" }} />
          </div>
          <div className="bars" onClick={toggle}>
            <HiMenuAlt3 />
          </div>
        </div>
        {menu.map((item, index) => (
          <SidebarItem key={index} item={item} isOpen={isOpen} />
        ))}
      </div>
      <main
        style={{
          paddingLeft: isOpen ? "230px" : "100px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
