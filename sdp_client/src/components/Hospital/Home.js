import { Link, useLocation, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import user from "../../api/user";
import "./Login.css";
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
        
          <Link className={`  `} aria-current="page" to="/hospital/addBed">
            
          <button className=" custom-btn btn-7">Add Bed</button>
           
          </Link>
        

        {/* <button type="button" class="btn btn-success me-3">
        <Link className={`  `} aria-current="page" to="/hospital/updateBed">
          <label className="text-decoration-none" style={{ color: "black" }}>
            Update Bed
          </label>
        </Link>
      </button> */}

        
          <Link className={`  `} aria-current="page" to="/hospital/addDoctor">
          <button className=" custom-btn btn-7">Add Doctor</button>
              
           
          </Link>
       

        
          <Link className={`  `} aria-current="page" to="/hospital/DoctorList">
          <button className=" custom-btn btn-7">DoctorList</button>
             
            
          </Link>
        
        
          <Link
            className={`  `}
            aria-current="page"
            to="/hospital/DoctorAppointmentList"
          >
            <button className=" custom-btn btn-7">Appointments</button>
              
          </Link>
        

        <button type="button" class="custom-btn btn-7">
          <Link
            className={`  `}
            aria-current="page"
            to="/hospital/BedBookedList"
          >
           <button className=" custom-btn btn-7">Bed Booked List</button>
              
            
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
