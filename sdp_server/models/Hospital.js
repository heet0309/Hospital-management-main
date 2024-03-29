const mongoose = require("mongoose");
const { Schema } = mongoose;

const HospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  licence: {
    type: Object,
    url: {
      true: URL,
    },
    public_id: {
      type: String,
    },
  },
  address: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  doctorDetails: {
    type: [Object],
  },
  bedDetails: {
    type: [Object],
  },
  approved: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  appoinment: {
    type: [
      mongoose.Schema({
        patientName: String,
        age: Number,
        date: String,
        timeSlot: String,
      }),
    ],
  },
  bedBookData: {
    type: [
      mongoose.Schema({
        bedType: String,
        days: Number,
        cost: Number,
      }),
    ],
  },
});
const Hospital = mongoose.model("hospital", HospitalSchema);
module.exports = Hospital;
