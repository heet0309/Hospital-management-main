import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let location = useLocation();

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/hospital/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("id", json.hospital._id);
      props.showAlert("Logged in successfully", "success");
      history.push("/hospital/Home");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container1">

      <div className="slider1" />
      <div className="btn1">
        <button className="login1">Login Form</button>

      </div>

      <div className="form-section1">

        <div className="login-box1">
          <input
            type="email"
            className="email1 ele1"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            placeholder="youremail@email.com"
          />
          <input type="password" className="password1 ele1" placeholder="password" value={credentials.password}
            onChange={onChange}
            name="password"
            id="password" />
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            aria-current="page"
            to="/hospital/HospitalForgetPassword"
          >
            Forgot Password
          </Link>
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            aria-current="page"
            to="/hospital/SignUp"
          >
            Register
          </Link>
          <button type="submit"
            onClick={handleSubmit} className="clkbtn1">Login</button>
        </div>
      </div>
    </div>



  );
};

export default Login;
