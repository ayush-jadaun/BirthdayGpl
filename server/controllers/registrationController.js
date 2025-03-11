import Registration from "../models/Registration.js";

export const registerUser = async (req, res) => {
  const { registrationNumber, name } = req.body;
  if (!registrationNumber) {
    return res.status(400).json({ error: "Registration number is required." });
  }
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  try {
    const registration = new Registration({ registrationNumber, name });
    await registration.save();
    res
      .status(200)
      .json({ message: "Registration successful.", registrationNumber });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ error: "Registration number already exists." });
    }
    console.error("Error in registerUser:", err);
    res.status(500).json({ error: "Server error." });
  }
};
