import React, { Component } from "react";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import Appointment from "./components/Appointment";
import DoctorList from "./components/DoctorList";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login></Login>
        <Signup></Signup> */}
        {/* <Home></Home> */}
        {/* <Appointment></Appointment> */}

        {<DoctorList></DoctorList>}
      </div>
    );
  }
}

export default App;
