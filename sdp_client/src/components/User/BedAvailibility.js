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
            {bedTypeList.map !== undefined &&
              bedTypeList.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
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
        {hospitalData.map((item, index) => (
          <div className="flex flex-row mb-5" key={index}>
            <div className="border-2 flex-row">
              <table className="table table-striped border border-success">
                <tbody>
                  <tr>
                    <td>Hospital Name: {item.name}</td>
                  </tr>
                  <tr>
                    <td>Address: {item.address}</td>
                  </tr>
                  <tr>
                    <td>Availablility: Yes/No</td>
                  </tr>
                  {/* <tr>
                    <td>Bed Charges: 5700</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            {console.log(item._id)}
            <div className=" text-center">
              <Link
                aria-current="page"
                to={{ pathname: "/user/DoctorList", state: { id: item._id } }}
              >
                <button className=" p-2 h-25 w-25">Book Doctor</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BedAvailibility;
