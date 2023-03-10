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
const BookAppointment = () => {
  const [id, setId] = useState("");

  const [appointmendData, setAppointmendData] = useState({
    patientName: "",
    age: "",
    date: "",
    timeSlot: "",
  });

  const location = useLocation();
  const { hospitalId } = location.state;

  const handleChange = (e) => {
    setAppointmendData({
      ...appointmendData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await user.post(
      `/hospital/bookAppoinment/${id}`,
      appointmendData
    );
    console.log(data);
    if (data?.success) {
      alert("Appointent Successfully!");
    }
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
          Submit
        </button>
      </form>
    </>
  );
};

export default BookAppointment;
