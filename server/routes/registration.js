import express from "express";
import { registerUser } from "../controllers/registrationController.js";
import Registration from "../models/Registration.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/registrations", async (req, res) => {
  try {
    const registrations = await Registration.find({});
    res.status(200).json(registrations);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

export default router;
