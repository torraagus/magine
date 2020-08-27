import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menu = [
    // { name: "Home", path: "" },
  ];
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.name}>
          <NavLink activeStyle={{ color: "tomato" }} exact to={`/${item.path}`}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
