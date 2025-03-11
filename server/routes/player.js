import express from "express";
import {
  updatePlayerDamage,
  getLeaderboard,
} from "../controllers/playerController.js";

const router = express.Router();

router.post("/update-damage", updatePlayerDamage);

router.get("/leaderboard", getLeaderboard);

export default router;
