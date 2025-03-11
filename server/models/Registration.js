import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Registration = mongoose.model("Registration", RegistrationSchema);
export default Registration;
