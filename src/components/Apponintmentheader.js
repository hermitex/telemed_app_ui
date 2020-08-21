import React from "react";
import "jquery";
import "popper.js";
import avatar from "../images/avatar.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";
function Apponintmentheader() {
  return (
    <div>
      <header className="pb-4" id="header">
        <nav className="navbar navbar-expand-lg navbar-light  container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav text-light">
              <li className="nav-item active">
                <a className="nav-link" href="#yuk">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#yuk">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#yuk">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#yuk"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#yuk">
                    Action
                  </a>
                  <a className="dropdown-item" href="#yuk">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#yuk">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <a className="navbar-brand" href="#h">
              <img src={avatar} alt="" className="avatar rounded-circle"></img>
            </a>
          </div>
        </nav>

        <div className="d-block container">
          <form className="form-inline w-100">
            <input
              className="form-control mr-sm-2 w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </header>
    </div>
  );
}
export default Apponintmentheader;
