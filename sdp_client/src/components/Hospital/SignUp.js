import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    address: "",
    // licence: "",
    password: "",
  });
  // const [selectedLicence, setSelectedLicence] = useState(null);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/hospital/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        address: credentials.address,
        // licence: credentials.licence,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authToken);
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
    // <div className="mt-3">
    //   <h1>Create an account to use Alyf</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label htmlFor="email" className="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         value={credentials.email}
    //         onChange={onChange}
    //         id="email"
    //         name="email"
    //         aria-describedby="emailHelp"
    //       />
    //       <div id="emailHelp" className="form-text">
    //         We'll never share your email with anyone else.
    //       </div>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="email" className="form-label">
    //         Hospital Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         value={credentials.name}
    //         onChange={onChange}
    //         id="name"
    //         name="name"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="address" className="form-label">
    //         Address
    //       </label>
    //       <textarea
    //         type="text"
    //         className="form-control"
    //         value={credentials.address}
    //         onChange={onChange}
    //         id="address"
    //         name="address"
    //       />
    //     </div>
    //     {/* <div className="mb-3">
    //       <label htmlFor="licence" className="form-label">
    //         Licence
    //       </label>
    //       <input
    //         type="file"
    //         className="form-control"
    //         value={credentials.licence}
    //         onChange={onChange}
    //         id="licence"
    //         name="licence"
    //       />
    //     </div> */}
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         value={credentials.password}
    //         onChange={onChange}
    //         name="password"
    //         required
    //         minLength={5}
    //         id="password"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">
    //         Confirm Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         required
    //         onChange={onChange}
    //         minLength={5}
    //         name="cpassword"
    //         id="cpassword"
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
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
                placeholder="Enter Hospital Address"
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
   
  );
};

export default Signup;
