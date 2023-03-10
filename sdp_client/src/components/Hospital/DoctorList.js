import React, { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`Field 1: ${field1}, Field 2: ${field2}, Field 3: ${field3}`);
  };

  return (
    <>
      <div className="flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Name: Heet Raithatha</td>
              </tr>
              <tr>
                <td>Speciality: Gynecologist, PhD, MD, MBBS</td>
              </tr>
              <tr>
                <td>No. of Appointments: 10</td>
              </tr>
              <tr>
                <td>Email Id : heetraithatha0309@gmail.com</td>
              </tr>
              <tr>
                <td>contact : 0123456789</td>
              </tr>
              <tr>
                <td>Experience: 6.9 Years</td>
              </tr>
              <tr>
                <td>Charges: 69</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" text-center">
          <Link aria-current="page" to="/hospital/updateDoctor">
            <button className=" p-2 h-25 w-25">Update Doctor </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Form;
