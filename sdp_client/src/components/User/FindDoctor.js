import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../api/user";

const FindDoctor = () => {
  const [query, setQuery] = useState("");
  const [hospitalData, setHospitalData] = useState([]);
  const handleSearch = async () => {
    const { data } = await user.get(
      `/hospital/getHospitalByCity?city=${query}`
    );
    setHospitalData(data);
  };

  const handleChange = async (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {}, [query]);

  return (
    <div className="container">
      <div className=" d-flex ">
        <div className="dropdown col">
          <input
            type="text"
            name="city"
            placeholder="Search City"
            className="rounded p-2"
            onChange={handleChange}
          />
        </div>
        {/* <div className="dropdown col ">
          <select className="p-2 rounded">
            <option>Speciality</option>
            <option>Gynecologist</option>
            <option>Neurologist</option>
            <option>Dentist</option>
          </select>
        </div> */}
        <button className="btn btn-primary rounded" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="mt-5">
        <h2>Hospital List</h2>
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
    </div>
  );
};

export default FindDoctor;
