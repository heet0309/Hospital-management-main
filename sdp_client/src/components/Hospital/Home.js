import { Link, useLocation, useHistory } from "react-router-dom";
import React from 'react'

const Home = () => {
  return (
    <div>
        <button type="button" class="btn btn-success me-3">
            <Link
              className={`  `}
              aria-current="page"
              to="/hospital/addBed"
            >
              <label className="text-decoration-none" style={{ color: "black" }}>
                Add Bed
              </label>
            </Link>
          </button>

          
        <button type="button" class="btn btn-success me-3">
            <Link
              className={`  `}
              aria-current="page"
              to="/hospital/updateBed"
            >
              <label className="text-decoration-none" style={{ color: "black" }}>
                Update Bed
              </label>
            </Link>
          </button>

          
        <button type="button" class="btn btn-success me-3">
            <Link
              className={`  `}
              aria-current="page"
              to="/hospital/addDoctor"
            >
              <label className="text-decoration-none" style={{ color: "black" }}>
                Add Doctor
              </label>
            </Link>
          </button>

          
        <button type="button" class="btn btn-success me-3">
            <Link
              className={`  `}
              aria-current="page"
              to="/hospital/updateDoctor"
            >
              <label className="text-decoration-none" style={{ color: "black" }}>
              Update Doctor
              </label>
            </Link>
          </button>
    </div>
  )
}

export default Home