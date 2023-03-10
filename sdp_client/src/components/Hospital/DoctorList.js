import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import user from "../../api/user";

function Form() {
  const [doctorList, setDoctorList] = useState([]);

  const handleDoctorList = async () => {
    const { data } = await user.get(
      `/hospital/hospitalDoctor/${localStorage.getItem("id")}`
    );
    setDoctorList(data);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    handleDoctorList();
  }, []);

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
                  <td>Speciality: {item.speciality}</td>
                </tr>
                <tr>
                  <td>Availablility: Yes/No</td>
                </tr>
                <tr>
                  <td>Email: {item.email}</td>
                </tr>
                <tr>
                  <td>Contact No. : {item.contact}</td>
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
                pathname: "/hospital/updateDoctor",
                state: { email: item.email },
              }}
            >
              <button className=" p-2 h-25 w-25">Update Doctor</button>
            </Link>
          </div>
        </div>
      ))}
      {/* <div className=" text-center">
          <Link aria-current="page" to="/hospital/updateDoctor">
            <button className=" p-2 h-25 w-25">Update Doctor </button>
          </Link>
        </div> */}
    </>
  );
}

export default Form;
