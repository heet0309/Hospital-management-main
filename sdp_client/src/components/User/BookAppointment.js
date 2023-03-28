import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import user from "../../api/user";
const timeSlots = [
  "09:00 To 10:00 AM",
  "10:00 To 11:00 AM",
  "11:00 To 12:00 AM",
  "12:00 To 01:00 PM",
  "02:00 To 03:00 PM",
  "03:00 To 04:00 PM",
  "04:00 To 05:00 PM",
  "05:00 To 06:00 PM",
];

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

const BookAppointment = () => {
  const [id, setId] = useState("");

  const [appointmendData, setAppointmendData] = useState({
    patientName: "",
    age: "",
    date: "",
    timeSlot: "",
    emailAddress: localStorage.getItem("email"),
  });

  const location = useLocation();
  const { hospitalId } = location.state;

  const handleChange = (e) => {
    setAppointmendData({
      ...appointmendData,
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
      amount: "150000",
      currency: "INR",
      name: "Alyf",
      description: "Proceed To Payment",
      image:
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35633090.jpg",
      handler: async function (response) {
        const { data } = await user.post(
          `/hospital/bookAppoinment/${id}`,
          appointmendData
        );
        if (data?.success) {
          alert("Appointent Successfully!");
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
    setId(hospitalId);
  }, []);
  return (
    <>
      <form>
        <div className="d-flex flex-row">
          <div className="mb-3 w-50 d-flex flex-row h-25">
            <label for="patient name" className="mt-1 form-label">
              Patient's Name
            </label>
            <input
              type="text"
              name="patientName"
              className="h-25 form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 w-50 d-flex flex-row h-25 mx-3">
            <label for="age" className="form-label">
              Age
            </label>
            <input
              type="Number"
              name="age"
              className="mx-2 form-control"
              id="age"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 ">
          <label for="date" className="form-label">
            Date:
          </label>
          <input
            className="p-1 mx-2"
            type="date"
            name="date"
            placeholder="dd-mm-yyyy"
            value={appointmendData.date}
            min="2023-03-10"
            onChange={handleChange}
            max="2023-03-20"
          />
        </div>
        <div className="mb-3 ">
          <label for="timeSlots" className="form-label ">
            Time Slots
          </label>
          <select
            name="timeSlot"
            className=" bg-primary-subtle border ms-1 p-2 rounded text-center w-25 rouded-circle text-dark"
            onChange={handleChange}
          >
            <option>Select time slot</option>
            {timeSlots.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Payment
        </button>
      </form>
    </>
  );
};

export default BookAppointment;
