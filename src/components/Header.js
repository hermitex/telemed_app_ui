import React from "react";
import logo from "../logo.svg";
function Header() {
  return (
    <div>
      <header className="d-flex justify-content-center flex-column">
        <div className="text-center">
          <img src={logo} alt="" className="w-25 h-25"></img>
        </div>

        <h1 className="text-center">QuickDoc</h1>
      </header>
    </div>
  );
}

export default Header;
