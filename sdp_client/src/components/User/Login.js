import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUser } from "../../api/patient";
import "./Login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState({});
  let history = useHistory();

  const getUserDetail = async () => {
    if (userId !== "") {
      const data = await getUser(userId);
      setUserDetails(data.data);
      console.log(data.data);
      if (data.data.isAdmin === true) {
        history.push("/admin/Home");
      } else {
        localStorage.setItem("email", credentials.email);
        history.push("/");
      }
    }
  };

  useEffect(() => {
    getUserDetail();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
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
      setUserId(json.data.user.id);
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in successfully", "success");
      await getUserDetail();
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
          <button type="submit"
            onClick={handleSubmit} className="clkbtn1">Login</button>
        </div>
      </div>
    </div>
   
  );
};

export default Login;
