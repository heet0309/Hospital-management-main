import React from "react";
import { Link } from "react-router-dom";
import "./Homecss.css";
export const Home = (props) => {
  return (
    <>
      
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">


          <div className="card" style={{ width: "25rem" }}>
            <img src="https://source.unsplash.com/400x400/?doctor,healthcare" className="card-img-top" alt="..." />
            
            <div className="card-body">
              <h5 className="card-title">Book Doctor</h5>
              <p className="card-text">
                Book a quick visit to your desired doctor and have yourself checked up.
              </p>
              <Link className={`  `} aria-current="page" to="/user/FindDoctor">
                <button className="custom-btn btn-7">
                  <span>Book Doctor</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{ width: "25rem" }}>
            <img src="https://source.unsplash.com/400x400/?hospital" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Book Bed</h5>
              <p className="card-text">
                Quickly book a bed of your choice and avoid the hassels of waiting in queues.
              </p>
              <Link className={`  `} aria-current="page" to="/user/BedAvailibility">
                <button className="custom-btn btn-7">
                  <span>Book Bed</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
