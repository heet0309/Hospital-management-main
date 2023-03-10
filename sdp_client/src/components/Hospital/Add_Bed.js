import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addBed } from "../../api/hospital";

const Add_Bed = (props) => {
  const [credentials, setCredentials] = useState({
    type: "",
    total: "",
    available: "",
    charges: "",
  });
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await addBed(
      userId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      },
      {
        type: credentials.type,
        total: credentials.total,
        available: credentials.available,
        charges: credentials.charges,
      }
    );

    props.showAlert("Account Created successfully", "success");
    history.push("/");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-3">
      <h1>Add Bed Details</h1>
      <form onSubmit={handleSubmit}>
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

export default Add_Bed;
