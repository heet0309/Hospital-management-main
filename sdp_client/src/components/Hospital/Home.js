import { Link, useLocation, useHistory } from "react-router-dom";
import React from "react";

const Home = () => {
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
        {/* 
      <button type="button" class="btn btn-success me-3">
        <Link className={`  `} aria-current="page" to="/hospital/updateDoctor">
          <label className="text-decoration-none" style={{ color: "black" }}>
            Update Doctor
          </label>
        </Link>
      </button> */}
      </div>
      <div className="mt-5 flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Bed Type: Manual</td>
              </tr>
              <tr>
                <td>Total : 53</td>
              </tr>
              <tr>
                <td>Available : 32</td>
              </tr>
              <tr>
                <td>Charges: 4500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/hospital/updateBed">
            <button className=" p-2 h-25 w-25">Update Details </button>
          </Link>
        </div>
      </div>
      <div className="mt-5 flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Bed Type: ICU</td>
              </tr>
              <tr>
                <td>Total : 83</td>
              </tr>
              <tr>
                <td>Available : 35</td>
              </tr>
              <tr>
                <td>Charges: 9300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/hospital/updateBed">
            <button className=" p-2 h-25 w-25">Update Details </button>
          </Link>
        </div>
      </div>
      <div className="mt-5 flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Bed Type: Electric</td>
              </tr>
              <tr>
                <td>Total : 75</td>
              </tr>
              <tr>
                <td>Available : 45</td>
              </tr>
              <tr>
                <td>Charges: 6700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/hospital/updateBed">
            <button className=" p-2 h-25 w-25">Update Details </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
