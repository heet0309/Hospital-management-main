import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import user from "../../api/user";
import "./FindDoctorcss.css";

const DoctorList = () => {
  const [hospitalId, setHospitalId] = useState("");
  const [doctorList, setDoctorList] = useState([]);

  const location = useLocation();
  const { id } = location.state;

  const handleDoctorList = async () => {
    const { data } = await user.get(`/hospital/hospitalDoctor/${hospitalId}`);
    console.log(data);
    setDoctorList(data);
  };

  useEffect(() => {
    setHospitalId(id);
  }, []);

  useEffect(() => {
    handleDoctorList();
  }, [hospitalId]);
  return (
    <>
      <h1> List of Available Doctors</h1>
      {doctorList.map((item, index) => (
        
          
        <div className="d-flex justify-content-between mb-5" key={index}>
          <div className="border border-success p-3">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Name: {item.name}</td>
                </tr>
                <tr>
                  <td>Speciality: Gynecologist, PhD, MD, MBBS</td>
                </tr>
                <tr>
                  <td>Availablility: Yes/No</td>
                </tr>
                <tr>
                  <td>Experience: {item.experience} Years</td>
                </tr>
                <tr>
                  <td>Charges: 100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" text-center m-lg-auto">
            <Link
              aria-current="page"
                to={{
                  pathname: "/user/BookAppoinment",
                  state: { hospitalId: hospitalId },
                }}
            >
              <button className="custom-btn btn-7">Book</button>
            </Link>
          </div>
        </div>
        
        
      ))}
    </>
  );
};

export default DoctorList;
