import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Category extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card bg_blue text-light">
              <div className="card-body shadow">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#sds" className="btn btn-primary">
                  Dentist
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body shadow">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#sd" className="btn btn-primary">
                  Psychiatrist
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body shadow">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#sd" className="btn btn-primary">
                  Cardiologist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Category;
