import React, { Component } from "react";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Home";
import Doctor from "./components/Apponintmentheader";
import Appointment from "./components/Appointment";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login></Login>
        <Signup></Signup> */}
        {/* <Home></Home> */}
        <Appointment></Appointment>
        {/* <Doctor></Doctor> */}
      </div>
    );
  }
}

export default App;
