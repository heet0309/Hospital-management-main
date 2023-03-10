import React from "react";
import { Link } from "react-router-dom";
export const Home = (props) => {
  return (
    <>
      <Link className={`  `} aria-current="page" to="/user/FindDoctor">
        <button type="button" className="btn btn-success me-3">
          <label className="text-decoration-none" style={{ color: "black" }}>
            Find Doctor
          </label>
        </button>
      </Link>
      <Link className={`  `} aria-current="page" to="/user/BedAvailibility">
        <button type="button" className="btn btn-success me-3">
          <label className="text-decoration-none" style={{ color: "black" }}>
            Bed Availablility
          </label>
        </button>
      </Link>
    </>
  );
};
