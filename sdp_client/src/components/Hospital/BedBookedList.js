import React, { useEffect, useState } from "react";
import user from "../../api/user";

const BedBookedList = () => {
  const [bookeData, setBookeData] = useState([]);
  const handleData = async () => {
    const { data } = await user.get(
      `/hospital/getBookedBed/${localStorage.getItem("id")}`
    );
    setBookeData(data.data);
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
            <th>Bed Type</th>
            <th>Days</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {bookeData.map !== undefined &&
            bookeData.map(
              (item, index) =>
                item?.bedType && (
                  <tr key={index}>
                    <td>{item.bedType}</td>
                    <td>{item.days}</td>
                    <td>{item.cost}</td>
                  </tr>
                )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default BedBookedList;
