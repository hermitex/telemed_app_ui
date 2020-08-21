import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button";

function Login() {
  return (
    <div>
      <div className="container py-3 background-image">
        <Header></Header>
        <h2>Login</h2>
        <form className="mb-3">
          <div className="form-group">
            <label htmlFor="user-email"></label>
            <input
              type="email"
              name="user-email"
              id="user-email"
              className="form-control"
              placeholder="Email Adrress"
              aria-describedby="helpId"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user-password"></label>
            <input
              type="password"
              name="user-password"
              id="user-password"
              className="form-control"
              placeholder="Password"
              aria-describedby="helpId"
              required
            />
          </div>
          <div>
            <ul className="d-flex flex-row justify-content-between list-unstyled">
              <li>
                <input type="checkbox" /> Remember me
              </li>
              <li>
                <a href="#recoverpassword">I forgot my password</a>
              </li>
            </ul>
          </div>
          <Button></Button>
        </form>

        <small id="helpId" className="text-muted ">
          I don't have an account. <a href="login.js">Sign Up</a>
        </small>
      </div>
    </div>
  );
}

export default Login;
