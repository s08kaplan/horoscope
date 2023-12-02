import React from "react";
import logo from '../images/logo'
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>HOROSCOPE</li>
        <li>DAILY</li>
        <li>TAROT</li>
        <li>ARTICLE</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Nav;
