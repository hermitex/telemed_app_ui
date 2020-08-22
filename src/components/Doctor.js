import React, { Component } from "react";
import Button from "./Button";
import avatar from "../images/avatar.png";
import nurse from "../images/avatar.png";
import "bootstrap/dist/css/bootstrap.css";
import "./appointment.css";
class Doctor extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div className="shadow py-3 px-4 mb-5">
            <div>
              <ul className="list-unstyled d-flex justify">
                <li className="pr-2">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="avatar rounded-circle"
                  ></img>
                </li>
                <li>
                  <h5>
                    <span className="prefix">Dr.</span>{" "}
                    <span className="first_name">Emanuel</span>{" "}
                    <span className="last_name">Katonga</span>
                  </h5>
                  <span className="speciality">Urinologist</span> <span>-</span>{" "}
                  <span className="hospital">Mama Lucy Hospital</span>
                  <br />
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-star red_border"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>{" "}
                  <span className="rating">4.8</span>{" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-alarm red_border"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.053.224l-1.5 3a.5.5 0 1 1-.894-.448L7.5 8.882V5a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                    <path
                      fillRule="evenodd"
                      d="M11.646 14.146a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 0-.708zm-7.292 0a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                    />
                    <path d="M7 1h2v2H7V1z" />
                  </svg>{" "}
                  <span className="start">08:04pm</span>-
                  <span className="finish">04:04pm</span>{" "}
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <ul className="list-unstyled d-flex justify-content-between">
                <li className="pr-2">
                  {/* Consultation fee: $350 */}
                  Consultation from <span>02:04pm</span>{" "}
                </li>
                <li>
                  <Button></Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Doctor;
