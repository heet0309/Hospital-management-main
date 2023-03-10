import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addDoctor } from "../../api/hospital";

const Add_Doctor = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    contact: "",
    speciality: "",
    experience: "",
    appointments: "",
  });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await addDoctor(
      localStorage.getItem("id"),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      },
      {
        name: credentials.name,
        email: credentials.email,
        contact: credentials.contact,
        speciality: credentials.speciality,
        experience: credentials.experience,
        appointments: credentials.appointments,
      }
    );

    props.showAlert("Doctor added successfully", "success");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-3">
      <h1>Add Doctor's Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Doctor Name
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <textarea
            type="number"
            className="form-control"
            value={credentials.address}
            onChange={onChange}
            id="contact"
            name="contact"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="speciality" className="form-label">
            Speciality
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.speciality}
            onChange={onChange}
            id="speciality"
            name="speciality"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Experience
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.experience}
            onChange={onChange}
            name="experience"
            id="experience"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appointments" className="form-label">
            Total appointment
          </label>
          <input
            type="number"
            className="form-control"
            required
            onChange={onChange}
            value={credentials.appointments}
            minLength={5}
            name="appointments"
            id="appointments"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add_Doctor;
