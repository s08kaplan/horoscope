import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="../../public/images/logo.png" alt="" width="20px" height="300px" />
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
