import React from "react";
import { Link } from "react-router-dom";

const HospitalList = () => {
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
              <tr>
                <td>Availablility: Yes/No</td>
              </tr>
              <tr>
                <td>Bed Charges: 5700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/BedBooking">
            <button className=" p-2 h-25 w-25">Book Bed</button>
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
                <td>Address: Rajkot</td>
              </tr>
              <tr>
                <td>Availablility: Yes/No</td>
              </tr>
              <tr>
                <td>Bed Charges: 4500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/BedBooking">
            <button className=" p-2 h-25 w-25">Book Bed</button>
          </Link>
        </div>
      </div>
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
                <td>Availablility: Yes/No</td>
              </tr>
              <tr>
                <td>Charges: 69</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/BedBooking">
            <button className=" p-2 h-25 w-25">Book Bed</button>
          </Link>
        </div>
      </div>
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
              <tr>
                <td>Availablility: Yes/No</td>
              </tr>
              <tr>
                <td>Bed Charges: 5700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/BedBooking">
            <button className=" p-2 h-25 w-25">Book Bed</button>
          </Link>
        </div>
      </div>
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
              <tr>
                <td>Availablility: Yes/No</td>
              </tr>
              <tr>
                <td>Bed Charges: 5700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" text-center">
          <Link aria-current="page" to="/user/BedBooking">
            <button className=" p-2 h-25 w-25">Book Bed</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HospitalList;
