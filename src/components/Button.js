import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Button() {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="submit"
        className="btn bg-red text-uppercase font-weight-bold"
      >
        Signup
      </button>
    </div>
  );
}

export default Button;
