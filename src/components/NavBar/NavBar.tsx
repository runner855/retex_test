import React from "react";
import { CiUser } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <div className="main">
      <div className="navbar_container_top">
        <ul className="navbar_left">
          <li>Contribuisci</li>
          <li>Abbonati</li>
          <div className="navbar_right">
            <li>
              <CiUser />
            </li>
            <li className="accedi">Accedi</li>
          </div>
        </ul>
      </div>
      <div className="navbar_container_bottom">
        <ul className="bottom_cont">
          <div className="hamburger_menu">
            <li>
              <IoMdMenu />
            </li>
          </div>
          <li></li>
          <div className="search">
            <li>
              <CiSearch />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
