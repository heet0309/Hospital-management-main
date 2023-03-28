import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import user from "../../api/user";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const BedBooking = () => {
  const [hospitalId, setHospitalId] = useState("");
  const [bedType, setBedType] = useState("");
  const [bedList, setBedList] = useState([]);
  const location = useLocation();
  const { id, type } = location.state;

  const [bedBookData, setBedBookData] = useState({
    bedType: type,
    days: 0,
    cost: 1500,
    emailAddress: localStorage.getItem("email"),
  });

  const handleBedList = async () => {
    const { data } = await user.get(`/hospital/hospitalBeds/${hospitalId}`);
    setBedList(data);
  };

  const handleChange = (e) => {
    setBedBookData({
      ...bedBookData,
      [e.target.name]: e.target.value,
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Unable to load Payment gateway. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_giq1IMMWeasz25", // Enter the Key ID generated from the Dashboard
      amount: bedBookData.days * 150000,
      currency: "INR",
      name: "Alyf",
      description: "Proceed To Payment",
      image:
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35633090.jpg",
      handler: async function (response) {
        const { data } = await user.post(
          `/hospital/bedBookData/${hospitalId}`,
          bedBookData
        );
        if (data?.success) {
          alert("Bed booked Successfully!");
        }
      },

      theme: {
        color: "teal",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    displayRazorpay();
  };

  useEffect(() => {
    setHospitalId(id);
    setBedType(type);
  }, []);

  useEffect(() => {
    handleBedList();
  }, [hospitalId]);
  useEffect(() => {
    handleBedList();
  }, [bedType]);
  return (
    <>
      <div>
        <h2>Bed Details</h2>
      </div>
      {bedList.map(
        (item, idx) =>
          item?.type === bedType && (
            <div
              key={idx}
              className="border p-3 my-5 rounded "
              style={{ backgroundColor: "#e0dbdb" }}
            >
              <div className="mb-3 ">
                <label for="patient name" className="mt-1 form-label">
                  Bed Type: {item.type}
                </label>
              </div>
              <div className="mb-3">
                <label for="Age" className="form-label">
                  No of days:
                </label>
                <input
                  type="Number"
                  name="days"
                  onChange={handleChange}
                  className="h-25 form-control"
                  id="age"
                />
              </div>
              <div className="mb-3 d-flex flex-row">
                <label for="Number" className="form-label">
                  Total Cost:
                </label>
                <div className="mx-2">
                  {bedBookData.cost * bedBookData.days}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Payment
              </button>
            </div>
          )
      )}
    </>
  );
};

export default BedBooking;
