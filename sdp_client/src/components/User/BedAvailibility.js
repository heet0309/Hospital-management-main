import React from "react";
import { Link } from "react-router-dom";

const BedAvailibility = () => {
  return (
    <>
      <div className="container row">
        <div className="dropdown col">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            City
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Rajkot
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Nadiad
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Navsari
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown col">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bed Type
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Manual Bed
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                ICU
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Electric Bed
              </a>
            </li>
          </ul>
        </div>
        <Link
          className="button col"
          aria-current="page"
          to="/user/HospitalList"
        >
          <button type="button" className="btn btn-success me-3">
            <label className="text-decoration-none" style={{ color: "black" }}>
              Next
            </label>
          </button>
        </Link>
      </div>
    </>
  );
};

export default BedAvailibility;
