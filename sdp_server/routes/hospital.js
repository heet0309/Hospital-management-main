const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");
const Hospital = require("../models/Hospital");
const { isValidObjectId } = require("mongoose");
const sendMail = require("../nodemailer");
// jet secret key
const JWT_SECRET = "harshilprajapati9192@gmail.com";

router.post(
  "/create",
  [
    body("name", "Enter a valid name").isLength({ min: 2 }),
    body("email", "Enter a valid email").isEmail(),

    // password must be at least 5 chars long
    body("password", "Enter must be atleast 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;

    // If there ate error then return the bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      // check whether the user with same email exists already
      let hospital = await Hospital.findOne({ email: req.body.email });
      if (hospital) {
        return res.status(400).json({
          success,
          errors: "sorry a hospital with this email already exsits",
        });
      }
      // hashing a password
      const salt = bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      hospital = await Hospital.create({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        // licence: req.body.licence,
        password: secPass,
      });

      const data = {
        hospital: {
          id: hospital.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can not be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there ate error then return the bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let hospital = await Hospital.findOne({ email });
      if (!hospital) {
        success = false;
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, hospital.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          errors: "Please try to login with correct credentials",
        });
      }

      success = true;
      res.json({ success, hospital });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

router.post("/getHospital", fetchuser, async (req, res) => {
  try {
    let hospitalId = req.hospital.id;
    const hospital = await Hospital.findById(hospitalId).select("-password");
    res.send(hospital);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

router.get("/getAllPendingList", async (req, res) => {
  try {
    const hospital = await Hospital.find({ approved: false });
    console.log(hospital);
    res.send(hospital);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

router.get("/getAllApprovedList", async (req, res) => {
  try {
    const hospital = await Hospital.find({ approved: true });
    res.send(hospital);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

router.put("/updateStatus/:id", async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    // Find the note to be updated and update it
    let hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).send("Hospital Not Found");
    }
    hospital.approved = true;

    await hospital.save();

    res.json({ hospital: hospital });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error\n" + error.message);
  }
});

//add hospitals
router.put("/addHospitals", async (req, res) => {
  try {
    const { addHospital } = req.body;
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    let hospital = await Hospital.updateOne(
      { _id: req.params.id },
      { $push: { doctorDetails: addHospital } }
    );
    res.json({ hospital: hospital });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error\n" + error.message);
  }
});
//delete hospital
router.delete("/deleteHospital/:id", async (req, res) => {
  try {
    const prmId = res.params.id;
    if (!isValidObjectId(prmId))
      return res.status(401).json({ error: "Invalid Request" });

    let hospital = await Hospital.findById(prmId);
    if (!hospital) {
      return res.status(404).send("Hospital is not found");
    }
    deleting = await Hospital.findByIdAndDelete(prmId);
    res.json({ success: "Hospital has been deleted", hospital: hospital });
  } catch (error) {
    console.error(error.message);
    return res.status(404).send("Member not found");
  }
});

//get hospitals
router.get("/findHospitalDetails/:id", async (req, res) => {
  try {
    const prmId = req.params.id;
    if (!isValidObjectId(prmId)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    let data = await Hospital.findById(prmId);
    if (!data) {
      return res.status(404).send("Hospital not found");
    }
    res.json({ data: data });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//BED SYSTEM APIs
//add bed
router.put("/addBed/:id", async (req, res) => {
  try {
    const { type, total, available, charges } = req.body;
    console.log(type);
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    let bed = await Hospital.updateOne(
      { _id: req.params.id },
      {
        $push: {
          bedDetails: {
            type: type,
            total: total,
            available: available,
            charges: charges,
          },
        },
      }
    );
    res.json({ bed: bed });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error\n" + error.message);
  }
});

//get bed
router.get("/findBedDetails/:id", async (req, res) => {
  try {
    const prmId = req.params.id;
    if (!isValidObjectId(prmId)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    let data = await Hospital.findById(prmId);
    if (!data) {
      return res.status(404).send("Hospital not found");
    }
    res.json({ data: data });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//delete bed
router.delete("/deleteBed/:id", async (req, res) => {
  try {
    const prmId = res.params.id;
    if (!isValidObjectId(prmId))
      return res.status(401).json({ error: "Invalid Request" });

    let bed = await Hospital.findById(prmId);
    if (!bed) {
      return res.status(404).send("bed is not found");
    }
    deleting = await Hospital.findByIdAndDelete(prmId);
    res.json({ success: "bed has been deleted", bed: bed });
  } catch (error) {
    console.error(error.message);
    return res.status(404).send("Member not found");
  }
});

router.put("/addDoctor/:id", async (req, res) => {
  try {
    const { name, email, contact, experience, appointments } = req.body;
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    let doctor = await Hospital.updateOne(
      { _id: req.params.id },
      {
        $push: {
          doctorDetails: {
            name: name,
            email: email,
            contact: contact,
            experience: experience,
            appointments: appointments,
          },
        },
      }
    );
    res.json({ doctor: doctor });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error\n" + error.message);
  }
});

router.post("/forgetPassword", async (req, res) => {
  try {
    const { emailAddress, subject, text } = req.body;
    let data = await Hospital.findOne({ emailAddress: emailAddress });
    console.log(data);
    if (!data) {
      return res.status(200).send("Email Id doesn't exist");
    }
    // const to = emailAddress;
    sendMail(emailAddress, subject, text);
    return res.status(200).send("Check your Mail\n");
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error\n" + error.message);
  }
});

// get hospital by city & speciality
router.get("/getHospitalByCity", async (req, res) => {
  const { city, speciality } = req.query;
  let hospital = await Hospital.find({
    $and: [{ city: { $eq: city } }],
  });

  if (!hospital) {
    return res.json({ success: false, msg: "Hopital not found!" });
  }

  let hospitalArr = new Array();

  hospital.map((item) => {
    item.doctorDetails.map((doctor) => {
      if (doctor.speciality === speciality) {
        hospitalArr.push(item);
      }
    });
  });

  return res.json(hospitalArr);
});

// get hospital beds
router.get("/hospitalBeds", async (req, res) => {
  const { city, type } = req.query;

  const hospital = await Hospital.find({ $and: [{ city: { $eq: city } }] });

  let hospitalArr = new Array();

  hospital.map((item) => {
    item.bedDetails.map((bed) => {
      if (bed.type === type) {
        hospitalArr.push(item);
      }
    });
  });

  res.json(hospitalArr);
});

// get all bed types
router.get("/hospitalBedType", async (req, res) => {
  let bedTypeArr = new Array();

  const hospital = await Hospital.find({});

  hospital.map((item) => {
    item.bedDetails.map((bed) => {
      if (bed?.type !== null) {
        bedTypeArr.push(bed.type);
      }
    });
  });

  res.json(bedTypeArr);
});

// get all doctor speciality
router.get("/hospitalDoctorSpeciality", async (req, res) => {
  let specialityArr = new Array();

  const hospital = await Hospital.find({});

  hospital.map((item) => {
    item.doctorDetails.map((doctor) => {
      if (doctor?.speciality !== null) {
        specialityArr.push(doctor.speciality);
      }
    });
  });

  res.json(specialityArr);
});

router.get("/hospitalBeds/:id", async (req, res) => {
  const { id } = req.params;

  const beds = await Hospital.findById(id);

  return res.json(beds.bedDetails);
});

router.get("/hospitalDoctor/:id", async (req, res) => {
  const { id } = req.params;

  const doctors = await Hospital.findById(id);

  res.json(doctors.doctorDetails);
});

router.post("/bookAppoinment/:id", async (req, res) => {
  const { id } = req.params;
  const { patientName, age, date, timeSlot, emailAddress } = req.body;

  const data = await Hospital.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        appoinment: { patientName, age, date, timeSlot },
      },
    },
    { new: true }
  );

  sendMail(
    emailAddress,
    "Appointment Booking",
    "Your appointment is booked succesfully.  Details:-  Date: " +
      date +
      " Time Slot:" +
      timeSlot
  );

  res.json({ success: true });
});

router.post("/bedBookData/:id", async (req, res) => {
  const { id } = req.params;
  const { bedType, days, cost, emailAddress } = req.body;

  const data = await Hospital.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        bedBookData: { bedType, days, cost },
      },
    },
    { new: true }
  );

  const hospital = await Hospital.findById(id);

  hospital.bedDetails.map((item, index) => {
    if (item.type === bedType) {
      hospital.bedDetails[index].available -= 1;
    }
  });

  await hospital.save();

  sendMail(
    emailAddress,
    "Bed Booking",
    "Your Bed is booked succesfully.  Details:-  Bed Type: " +
      bedType +
      " Days: " +
      days +
      " Total Cost: " +
      cost
  );

  res.json({ success: true });
});

router.put("/updateBedDetails", async (req, res) => {
  const { hospitalId, bedDetails } = req.body;

  const hospital = await Hospital.findById(hospitalId);

  hospital.bedDetails.map((item, index) => {
    if (item.type === bedDetails.type) {
      hospital.bedDetails[index] = bedDetails;
    }
  });

  await hospital.save();

  res.json({ success: true });
});

router.get("/getAppointments/:hospitalId", async (req, res) => {
  const { hospitalId } = req.params;

  const hospital = await Hospital.findById(hospitalId);

  res.json({ success: true, data: hospital.appoinment });
});

router.get("/getBookedBed/:hospitalId", async (req, res) => {
  const { hospitalId } = req.params;

  const hospital = await Hospital.findById(hospitalId);

  res.json({ success: true, data: hospital.bedBookData });
});

router.put("/updateDoctorDetails", async (req, res) => {
  const { hospitalId, doctorDetails } = req.body;

  const hospital = await Hospital.findById(hospitalId);

  hospital.doctorDetails.map((item, index) => {
    if (item.email === doctorDetails.email) {
      hospital.doctorDetails[index] = doctorDetails;
    }
  });

  await hospital.save();

  res.json({ success: true });
});

module.exports = router;
