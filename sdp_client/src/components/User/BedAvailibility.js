import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../api/user";

const BedAvailibility = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [hospitalData, setHospitalData] = useState([]);
  const [bedTypeList, setBedTypeList] = useState([]);
  const handleChange = async (e) => {
    setQuery(e.target.value);
  };

  const handleBedList = async () => {
    const { data } = await user.get(
      `/hospital/hospitalBeds?city=${query}&type=${type}`
    );
    setHospitalData(data);
  };

  const handleBedTypes = async () => {
    const { data } = await user.get(`/hospital/hospitalBedType`);
    setBedTypeList(data);
  };

  useEffect(() => {
    handleBedTypes();
  }, []);
  return (
    <>
      
        <div className="dropdown col">
          <div className="dropdown col">
            <input
              type="text"
              name="city"
              placeholder="Search City"
              className="form-control rounded-pill p-3 w-25 m-3"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="dropdown col ">
          <select
            className="form-control rounded-pill p-3 w-25 m-3"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            {bedTypeList.map !== undefined &&
              bedTypeList.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className=" m-lg-500 w-25 m-4  ">
          <button
            className="custom-btn btn-7 "
            onClick={handleBedList}
          >
            Search
          </button>
        </div>
      
      <div className="mt-5">
        <h2>Bed Details</h2>
        {hospitalData.map((item, index) => (
          <div className="d-flex justify-content-between mb-5" key={index}>
            <div className="border border-success p-3">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Hospital Name: {item.name}</td>
                  </tr>
                  <tr>
                    <td>Address: {item.address}</td>
                  </tr>
                  <tr>
                    <td>Availablility: Yes</td>
                  </tr>
                  <tr>
                    <td>Bed Charges: 1500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" text-center m-lg-auto">
              <Link
                aria-current="page"
                to={{
                  pathname: "/user/BedBooking",
                  state: { id: item._id, type: type },
                }}
              >
                <button className=" custom-btn btn-7">Book Bed</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BedAvailibility;
