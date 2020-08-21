import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import bg_img from "../images/background.svg";
import Button from "./Button";
function Home() {
  return (
    <div className="container mb-2">
      <div>
        <img src={bg_img} alt="" className="img-fluid"></img>
      </div>

      <div className="mt-5  d-flex justify-content-center flex-column text-center">
        <h1 className="text-capitalize">Choose your best doctor</h1>
        <p className="mt-3 mb-5 p-2">
          Access a list of qualified doctors and find your specialist, check
          their availability, make appointments, read reviews and make
          consultations.
        </p>
      </div>
      <Button></Button>
    </div>
  );
}

export default Home;
