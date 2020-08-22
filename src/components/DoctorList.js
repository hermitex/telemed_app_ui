import React, { Component } from "react";
import avatar from "../images/avatar.png";
import Doctor from "./Doctor";

class DoctorList extends Component {
  render() {
    return (
      <div>
        <header className="pb-4" id="header">
          <nav className="navbar navbar-expand navbar-light  container">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav text-light">
                <li className="nav-item active">
                  <a className="nav-link text-light h5" href="#yuk">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-return-left"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.854 5.646a.5.5 0 0 1 0 .708L3.207 9l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M13.5 2.5a.5.5 0 0 1 .5.5v4a2.5 2.5 0 0 1-2.5 2.5H3a.5.5 0 0 1 0-1h8.5A1.5 1.5 0 0 0 13 7V3a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                    Doctor List
                  </a>
                </li>
              </ul>{" "}
            </div>
          </nav>
        </header>
        <div className="d-block container py-4">
          <form className="form-inline w-100">
            <input
              className="form-control mr-sm-2 w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <Doctor></Doctor>
        <Doctor></Doctor>
        <Doctor></Doctor>
      </div>
    );
  }
}
export default DoctorList;
