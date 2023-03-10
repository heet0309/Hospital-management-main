import React from "react";
import { Link } from "react-router-dom";

const BedBooking = () => {
  return (
    <>
      <div class="mb-3">
        <label for="patient name" className="mt-1 form-label">
          Bed Type: Afdfwrgrg
        </label>
        {/* <input type="name" name="name" className="h-25 form-control" /> */}
      </div>
      <div class="mb-3">
        <label for="Age" class="form-label">
          No of days:
        </label>
        <input type="Number" className="h-25 form-control" id="age" />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label for="Number" class="form-label">
          Total Cost:
        </label>
        <div className="mx-2">3254</div>
      </div>
      <button type="submit" class="btn btn-primary">
        Payment
      </button>
    </>
  );
};

export default BedBooking;
