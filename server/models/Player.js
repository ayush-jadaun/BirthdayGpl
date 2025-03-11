import mongoose from "mongoose";

const DamageHistorySchema = new mongoose.Schema({
  damage: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const PlayerSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  damageHistory: [DamageHistorySchema],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Player = mongoose.model("Player", PlayerSchema);
export default Player;
