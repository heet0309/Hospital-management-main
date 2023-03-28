import React, { useEffect, useState } from "react";
import user from "../../api/user";

const DoctorAppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const handleData = async () => {
    const { data } = await user.get(
      `/hospital/getAppointments/${localStorage.getItem("id")}`
    );
    setAppointments(data.data);
    
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <h2>Doctor Appointment List</h2>
      <br />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Date</th>
            <th>Time Slot</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map !== undefined &&
            appointments.map(
              (appointment, index) =>
                appointment?.patientName && (
                  <tr key={index}>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.age}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.timeSlot}</td>
                  </tr>
                )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorAppointmentList;
