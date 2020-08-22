import React, { Component } from "react";
import avatar from "../images/avatar.png";
import nurse from "../images/avatar.png";
import Apponintmentheader from "./Apponintmentheader";
import "bootstrap/dist/css/bootstrap.css";
import "./appointment.css";
import Button from "./Button";
import DoctorList from "./DoctorList";
import Doctor from "./Doctor";
import Category from "./Category";
class Appointment extends Component {
  render() {
    return (
      <div className="bg-light h-100">
        <Apponintmentheader></Apponintmentheader>

        <div className="container">
          <ul className="list-unstyled py-3 d-flex justify-content-between">
            <li className="py-2">
              <h2>Upcoming Appointments</h2>
            </li>
            <li className="py-2">
              <a href="#appointments">View all</a>
            </li>
          </ul>
        </div>

        <div className="container">
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
                    <span>Dr.</span> <span>Martin</span> <span>Jionga</span>
                  </h5>
                  <small>Cardiologist</small>
                </li>
              </ul>
            </div>

            <div>
              <ul className="list-unstyled d-flex justify-content-between">
                <li className="pr-2">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-calendar-check red_border"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>{" "}
                  <span>21</span> <span>Aug</span> <span>2020</span>{" "}
                  <span>12:04</span>
                </li>
                <li>
                  <Button></Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            id="circle-shape-example"
            className="py-3 bg_grad px-4 text-light"
          >
            <img src={nurse} alt="doctor" className="curve image-fluid" />
            <h2 className="card-text">Consult online with the best doctors </h2>
            <p className="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              necessitatibus, reiciendis cupiditate debitis, quos sequi eligendi
              dignissimos impedit quaerat sint hic excepturi eos unde voluptate?
            </p>
            <Button></Button>
          </div>
        </div>

        <div className="container">
          <ul className="list-unstyled py-3 d-flex justify-content-between">
            <li className="py-2">
              <h2>Categories</h2>
            </li>
            <li className="py-2">
              <a href="#appointments">View all</a>
            </li>
          </ul>
        </div>
        <Category></Category>
        <div className="container">
          <ul className="list-unstyled py-3 d-flex justify-content-between">
            <li className="py-2">
              <h2 className="text-capitalize">Top doctors</h2>
            </li>
            <li className="py-2">
              <a href="#appointments">View all</a>
            </li>
          </ul>
        </div>
        <Doctor></Doctor>
        <Doctor></Doctor>
        <Doctor></Doctor>
      </div>
    );
  }
}

export default Appointment;
