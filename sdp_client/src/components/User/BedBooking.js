import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import user from "../../api/user";

const BedBooking = ({ id }) => {
  const [hospitalId, setHospitalId] = useState("");
  const [bedList, setBedList] = useState([]);

  const handleBedList = async () => {
    const { data } = await user.get(`/hospital/hospitalBeds/${hospitalId}`);

    setBedList(data);
  };

  useEffect(() => {
    setHospitalId(id);
  }, []);

  useEffect(() => {
    handleBedList();
  }, [hospitalId]);
  return (
    <>
      <div>
        <h2>Bed Details</h2>
      </div>
      {bedList.map((item) => (
        <div
          className="border p-3 my-5 rounded "
          style={{ backgroundColor: "#e0dbdb" }}
        >
          <div className="mb-3 ">
            <label for="patient name" className="mt-1 form-label">
              Bed Type: Afdfwrgrg
            </label>
            {/* <input type="name" name="name" className="h-25 form-control" /> */}
          </div>
          <div className="mb-3">
            <label for="Age" className="form-label">
              No of days:
            </label>
            <input type="Number" className="h-25 form-control" id="age" />
          </div>
          <div className="mb-3 d-flex flex-row">
            <label for="Number" className="form-label">
              Total Cost:
            </label>
            <div className="mx-2">3254</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Payment
          </button>
        </div>
      ))}
    </>
  );
};

export default BedBooking;
