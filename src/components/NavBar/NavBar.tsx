import React from "react";
import { CiUser } from "react-icons/ci";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <ul className="navbar_left">
        <li>Contribuisci</li>
        <li>Abbonati</li>
        <li>
          <CiUser />
        </li>
        <li className="accedi">Accedi</li>
      </ul>
    </div>
  );
};
