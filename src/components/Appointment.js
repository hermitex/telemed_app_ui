import React, { Component } from "react";
import avatar from "../images/avatar.png";
import doc_img from "../images/avatar.png";
import Apponintmentheader from "./Apponintmentheader";
import "bootstrap/dist/css/bootstrap.css";
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
            <img
              src={doc_img}
              alt="doctor"
              className="curve image-fluid"
              class="curve"
            />
            <h2 className="card-text">Consult online with the best doctors </h2>
            <p className="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              necessitatibus, reiciendis cupiditate debitis, quos sequi eligendi
              dignissimos impedit quaerat sint hic excepturi eos unde voluptate?
              Commodi facere velit culpa sit magni minus excepturi
              necessitatibus atque error iusto, eius, sint dolor non veniam
              tempora delectus aut iste iure ipsa. Et, animi!
            </p>
            <Button></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
