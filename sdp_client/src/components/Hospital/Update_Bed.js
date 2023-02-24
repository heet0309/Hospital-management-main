import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Update_Bed = (props) => {
  const [credentials, setCredentials] = useState({
    id:"",
    type: "",
    total:"",
    available:"",
    charges:""
  });
  // const [selectedLicence, setSelectedLicence] = useState(null);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/hospital/", {   //chages
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: credentials.type,
        total:credentials.total,
        available: credentials.available,
        charges: credentials.charges
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
    <div className="mt-3">
      <h1>Add Bed Details</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Bed Id
          </label>
          <textarea
            type="number"
            className="form-control"
            value={credentials.address}
            onChange={onChange}
            id="id"
            name="id"
          />
        </div>
      <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Bed Type
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="type"
            name="type"
          />
        </div>
        
        
        <div className="mb-3">
          <label htmlFor="total" className="form-label">
          Total
          </label>
          <textarea
            type="number"
            className="form-control"
            value={credentials.address}
            onChange={onChange}
            id="total"
            name="total"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="available" className="form-label">
            Available
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="available"
            id="available"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="charges" className="form-label">
            Charges
          </label>
          <input
            type="number"
            className="form-control"
            required
            onChange={onChange}
            minLength={5}
            name="charges"
            id="charges"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update_Bed;
