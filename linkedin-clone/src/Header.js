import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>THIS is the header</h1>

      <div className="header__left">
        <img src="" alt="" />

        <div className="header__search">
          {/* {searchicon} */}
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
