import Player from "../models/Player.js";

export const updatePlayerDamage = async (req, res) => {
  const { registrationNumber, damage } = req.body;
  if (!registrationNumber || damage === undefined) {
    return res
      .status(400)
      .json({ error: "Registration number and damage are required." });
  }
  try {
    let player = await Player.findOne({ registrationNumber });
    if (!player) {
     
      player = new Player({
        registrationNumber,
        score: damage,
        damageHistory: [{ damage }],
      });
    } else {
      player.damageHistory.push({ damage });
      player.score += damage;
      player.updatedAt = Date.now();
    }
    await player.save();
    res.status(200).json({ message: "Player updated.", player });
  } catch (err) {
    console.error("Error updating damage:", err);
    res.status(500).json({ error: "Server error." });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const players = await Player.find({}).sort({ score: -1 });
    res.status(200).json(players);
  } catch (err) {
    console.error("Error retrieving leaderboard:", err);
    res.status(500).json({ error: "Server error." });
  }
};
