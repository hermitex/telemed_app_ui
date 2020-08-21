import React from "react";
import Button from "./Button";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import "./button.css";

function Login() {
  return (
    <div className="container py-3 background-image">
      <Header></Header>
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="first-name"></label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="form-control"
            placeholder="First Name"
            aria-describedby="helpId"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name"></label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            className="form-control"
            placeholder="Last Name"
            aria-describedby="helpId"
            required
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="confirm-user-password"></label>
          <input
            type="password"
            name="confirm-user-password"
            id="confirm-user-password"
            className="form-control"
            placeholder="Confirm Password"
            aria-describedby="helpId"
            required
          />
        </div>
        <Button></Button>
      </form>

      <small id="helpId" className="text-muted">
        Have an account? <a href="login.js">Login</a>
      </small>
    </div>
  );
}

export default Login;
