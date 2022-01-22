import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  console.log("render");

  return (
    <header className={style["wrapper-example"]}>
      <NavLink to="/">
        <div className={style.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
      </NavLink>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
        </ul>
      </nav>
      <button type="button" className={style.btn}>
        <span>SIGN UP</span>
      </button>
    </header>
  );
};

export default Header;
