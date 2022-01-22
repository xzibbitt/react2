import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style["wrapper-example"]}>
      <Link to="/">
        <div className={style.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
      </Link>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
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
