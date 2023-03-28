import { Link, useLocation, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import user from "../../api/user";

const Home = () => {
  const [bedList, setBedList] = useState([]);

  const handleBedList = async () => {
    const { data } = await user.get(
      `/hospital/hospitalBeds/${localStorage.getItem("id")}`
    );
    setBedList(data);
  };

  useEffect(() => {
    handleBedList();
  }, []);
  return (
    <>
      <div>
        <button type="button" class="btn btn-success me-3">
          <Link className={`  `} aria-current="page" to="/hospital/addBed">
            <label className="text-decoration-none" style={{ color: "black" }}>
              Add Bed
            </label>
          </Link>
        </button>

        {/* <button type="button" class="btn btn-success me-3">
        <Link className={`  `} aria-current="page" to="/hospital/updateBed">
          <label className="text-decoration-none" style={{ color: "black" }}>
            Update Bed
          </label>
        </Link>
      </button> */}

        <button type="button" class="btn btn-success me-3">
          <Link className={`  `} aria-current="page" to="/hospital/addDoctor">
            <label className="text-decoration-none" style={{ color: "black" }}>
              Add Doctor
            </label>
          </Link>
        </button>

        <button type="button" class="btn btn-success me-3">
          <Link className={`  `} aria-current="page" to="/hospital/DoctorList">
            <label className="text-decoration-none" style={{ color: "black" }}>
              DoctorList
            </label>
          </Link>
        </button>
        <button type="button" class="btn btn-success me-3">
          <Link
            className={`  `}
            aria-current="page"
            to="/hospital/DoctorAppointmentList"
          >
            <label className="text-decoration-none" style={{ color: "black" }}>
              Doctor Appointment List
            </label>
          </Link>
        </button>

        <button type="button" class="btn btn-success me-3">
          <Link
            className={`  `}
            aria-current="page"
            to="/hospital/BedBookedList"
          >
            <label className="text-decoration-none" style={{ color: "black" }}>
              Bed Booked List
            </label>
          </Link>
        </button>
        {/* 
      <button type="button" class="btn btn-success me-3">
        <Link className={`  `} aria-current="page" to="/hospital/updateDoctor">
          <label className="text-decoration-none" style={{ color: "black" }}>
            Update Doctor
          </label>
        </Link>
      </button> */}
      </div>
      <div className="mt-5">
        <h2>Bed Details</h2>
        {bedList.map(
          (item, index) =>
            item.type !== null && (
              <div
                key={index}
                className="border p-3 my-5 rounded "
                style={{ backgroundColor: "#e0dbdb" }}
              >
                <div className="mb-3 ">
                  <label for="patient name" className="mt-1 form-label">
                    Bed Type: {item.type}
                  </label>
                </div>
                <div className="mb-3 ">
                  <label for="patient name" className="mt-1 form-label">
                    Total: {item.total}
                  </label>
                </div>
                <div className="mb-3 ">
                  <label for="patient name" className="mt-1 form-label">
                    Available: {item.available}
                  </label>
                </div>
                <div className="mb-3 ">
                  <label for="patient name" className="mt-1 form-label">
                    Charges: {item.charges}
                  </label>
                </div>
                <Link
                  to={{
                    pathname: "/hospital/updateBed",
                    state: { type: item.type },
                  }}
                >
                  <button className="btn btn-primary">Update</button>
                </Link>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Home;
