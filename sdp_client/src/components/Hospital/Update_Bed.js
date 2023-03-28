import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import user from "../../api/user";

const Update_Bed = () => {
  const location = useLocation();

  const { type } = location.state;
  const [bedDetails, setBedDetails] = useState({
    type: type,
    total: "",
    available: "",
    charges: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await user.put("/hospital/updateBedDetails", {
      bedDetails,
      hospitalId: localStorage.getItem("id"),
    });
    if (data?.success) {
      alert("Bed Updated Successfully!");
    }
  };

  const onChange = (e) => {
    setBedDetails({ ...bedDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-3">
      <h1>Update Bed Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Bed Type
          </label>
          <input
            type="text"
            className="form-control"
            value={bedDetails.type}
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
            value={bedDetails.address}
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
            value={bedDetails.password}
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
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Update_Bed;
