import React from "react";

const BookAppointment = () => {
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
  return (
    <>
      <form>
        <div className="d-flex flex-row">
          <div class="mb-3 w-50 d-flex flex-row h-25">
            <label for="patient name" className="mt-1 form-label">
              Patient's Name
            </label>
            <input type="name" name="name" className="h-25 form-control" />
          </div>
          <div class="mb-3 w-50 d-flex flex-row h-25 mx-3">
            <label for="Age" class="form-label">
              Age
            </label>
            <input type="Number" className="mx-2 form-control" id="age" />
          </div>
        </div>
        <div class="mb-3 ">
          <label for="date" class="form-label">
            Date:
          </label>
          <input
            className="p-1 mx-2"
            type="date"
            name="begin"
            placeholder="dd-mm-yyyy"
            value=""
            min="2023-03-10"
            max="2023-03-20"
          />
        </div>
        <div class="mb-3 ">
          <label for="timeSlots" class="form-label">
            Time Slots
          </label>
          {timeSlots.map((item) => (
            <div className="bg-primary-subtle border text-center w-25 rouded-circle text-dark">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button type="submit" class="btn btn-primary">
          Payment
        </button>
      </form>
    </>
  );
};

export default BookAppointment;
