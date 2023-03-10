import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import user from "../../api/user";

const Update_Doctor = (props) => {
  const [doctorDetails, setDoctorDetails] = useState({
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

    const { data } = await user.put("/hospital/updateDoctorDetails", {
      doctorDetails,
      hospitalId: localStorage.getItem("id"),
    });
    if (data?.success) {
      alert("Doctor Details updated successfully!");
    }
  };

  const onChange = (e) => {
    setDoctorDetails({ ...doctorDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-3">
      <h1>Update Doctor's Details</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Doctor Name
          </label>
          <input
            type="text"
            className="form-control"
            value={doctorDetails.name}
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
            value={doctorDetails.email}
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
            value={doctorDetails.address}
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
            value={doctorDetails.licence}
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
            value={doctorDetails.password}
            onChange={onChange}
            name="experience"
            id="experience"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appointment" className="form-label">
            Total appointment
          </label>
          <input
            type="number"
            className="form-control"
            required
            onChange={onChange}
            minLength={5}
            name="appointment"
            id="appointment"
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update_Doctor;
