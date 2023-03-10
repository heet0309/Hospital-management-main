import React from "react";
import { Link } from "react-router-dom";

const DocHospitalList = () => {
  return (
    <>
      <div className="flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Hospital Name: ND Desai</td>
              </tr>
              <tr>
                <td>Address: College Road, Nadiad</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/DoctorList">
            <button className=" p-2 h-25 w-25">Doctor List</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Hospital Name:Heet & Co MultiSpeciality Hospital</td>
              </tr>
              <tr>
                <td>Address: Time Square, NewYork, USA</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/DoctorList">
            <button className=" p-2 h-25 w-25">Doctor List</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Hospital Name:Heet & Co MultiSpeciality Hospital</td>
              </tr>
              <tr>
                <td>Address: Time Square, NewYork, USA</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/DoctorList">
            <button className=" p-2 h-25 w-25">Doctor List</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Hospital Name:Heet & Co MultiSpeciality Hospital</td>
              </tr>
              <tr>
                <td>Address: Time Square, NewYork, USA</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/DoctorList">
            <button className=" p-2 h-25 w-25">Doctor List</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row mb-5">
        <div className="border-2 flex-row">
          <table className="table table-striped border border-success">
            <tbody>
              <tr>
                <td>Hospital Name:Heet & Co MultiSpeciality Hospital</td>
              </tr>
              <tr>
                <td>Address: Time Square, NewYork, USA</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/DoctorList">
            <button className=" p-2 h-25 w-25">Doctor List</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DocHospitalList;
