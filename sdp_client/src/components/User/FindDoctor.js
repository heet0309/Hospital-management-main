import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../api/user";
import "./FindDoctorcss.css";

const FindDoctor = () => {
  const [query, setQuery] = useState("");
  const [hospitalData, setHospitalData] = useState([]);
  const [speciality, setSpeciality] = useState("Gynecologist");
  const [specialityList, setSpecialityList] = useState([]);

  const handleSearch = async () => {
    const { data } = await user.get(
      `/hospital/getHospitalByCity?city=${query}&speciality=${speciality}`
    );
    setHospitalData(data);
  };

  const handleChange = async (e) => {
    setQuery(e.target.value);
  };

  const handleSpeciality = async () => {
    const { data } = await user.get(`/hospital/hospitalDoctorSpeciality`);
    setSpecialityList(data);
  };

  useEffect(() => {
    handleSpeciality();
  }, []);

  useEffect(() => {}, [query]);

  return (
    <div className="container">
      
        <div className="col">
          <input
            type="text"
            name="city"
            placeholder="Search City"
            className="form-control rounded-pill p-3 w-25 m-3"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select
            onChange={(e) => setSpeciality(e.target.value)}
            className="form-control rounded-pill p-3  w-25 m-3 " 
          >
            <option>Select Speciality</option>
            {specialityList.map !== undefined &&
              specialityList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className=" m-lg-500 w-25 m-4  ">
          <button
            className="custom-btn btn-7 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      

      <div className="mt-5">
        <h2>Hospital List</h2>
        {hospitalData.map((item, index) => (<>
          <div className="d-flex justify-content-between mb-5" key={index}>
            <div className="border border-success p-3">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <strong>Hospital Name:</strong> {item.name}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address:</strong> {item.address}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Availability:</strong> Yes/No
                    </td>
                  </tr>
                  {/* <tr>
                    <td>Bed Charges: 5700</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            </div>
              <Link
                aria-current="page"
                to={{ pathname: "/user/DoctorList", state: { id: item._id } }}
              >
                <button className="custom-btn btn-7">
                  Book Doctor
                </button>
              </Link>
            
          </>
        ))}
      </div>
    </div>
  );
};

export default FindDoctor;