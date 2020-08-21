import React, { Component } from "react";
import avatar from "../images/avatar.png";
import doc_img from "../images/avatar.png";
import Apponintmentheader from "./Apponintmentheader";
import "./appointment.css";
import Button from "./Button";
class Appointment extends Component {
  render() {
    return (
      <div className="bg-light h-100">
        <Apponintmentheader></Apponintmentheader>

        <div className="container">
          <ul className="list-unstyled d-flex justify-content-between">
            <li className="py-2">
              <h2>Upcoming Appointments</h2>
            </li>
            <li className="py-2">
              <a href="#appointments">View all</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="card pt-3 px-4 mb-5">
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

        <div className="container h-100">
          <div className="card bg_grad text-white">
            <img
              className="card-img w-25  float-right"
              src={doc_img}
              alt="Card image"
            />
            <div className="card-img-overlay h-100">
              <h3 className="card-text">
                Consult online with the best doctors
              </h3>
              <p>Stay home, stay safe</p>
              <Button></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
