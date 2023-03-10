import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../api/user";

const BedAvailibility = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [bedList, setBedList] = useState([]);

  const handleChange = async (e) => {
    setQuery(e.target.value);
  };

  const handleBedList = async () => {
    const { data } = await user.get(
      `/hospital/hospitalBeds?city=${query}&type=${type}`
    );
    setBedList(data);
  };
  return (
    <>
      <div className=" d-flex ">
        <div className="dropdown col">
          <div className="dropdown col">
            <input
              type="text"
              name="city"
              placeholder="Search City"
              className="rounded p-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="dropdown col ">
          <select
            className="p-2 rounded"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="Manual Bed">Manual Bed</option>
            <option value="ICU">ICU</option>
            <option value="Electric Bed">Electric Bed</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleBedList}
          className="btn btn-success me-3"
        >
          <label className="text-decoration-none" style={{ color: "black" }}>
            Search
          </label>
        </button>
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
                  <div className="mx-2">{item.charges}</div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Payment
                </button>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default BedAvailibility;
