import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import user from "../../api/user";

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
      {doctorList.map((item, index) => (
        <div className="flex flex-row mb-5" key={index}>
          <div className="border-2 flex-row">
            <table className="table table-striped border border-success">
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
                  <td>Charges: 69</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" text-center">
            <Link
              aria-current="page"
                to={{
                  pathname: "/user/BookAppoinment",
                  state: { hospitalId: hospitalId },
                }}
            >
              <button className=" p-2 h-25 w-25">Book Appointment</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorList;
