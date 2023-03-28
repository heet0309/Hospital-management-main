import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    mobileNo: "",
    licence: "",
    password: "",
  });
  const [selectedLicence, setSelectedLicence] = useState(null);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        phone: credentials.mobileNo,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("email", credentials.email);
      props.showAlert("Account Created successfully", "success");
      history.push("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container1">
        <div className="slider1">
          <div className="btn1">
            <button className="signup1">Signup Form</button>
          </div>
          <div className="form-section1">
            <div className="signup-box1">
              <input
                type="text"
                className="name1 ele1"
                placeholder="Enter your name"
                onChange={onChange}
                id="name"
                name="name"
              />
              <input
                type="email"
                className="email1 ele1"
                placeholder="youremail@email.com"
                onChange={onChange}
                id="email"
                name="email"
              />
              <input
                type="text"
                className="name1 ele1"
                placeholder="Enter your number"
                onChange={onChange}
                id="mobileNo"
                name="mobileNo"
              />
              <input
                type="password"
                className="password1 ele1"
                placeholder="password"
                onChange={onChange}
                name="password"
                required=""
                minLength={5}
                id="password"
              />
              <input
                type="password"
                className="password1 ele1"
                placeholder="Confirm password"
                required
                onChange={onChange}
                minLength={5}
                name="cpassword"
                id="cpassword"
              />
              <button onClick={handleSubmit} className="clkbtn1">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
