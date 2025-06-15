import express from "express";
import { db } from "../config/db";

const router = express.Router();

router.post("/", async (req, res) => {
  const { date, time, numOfPersons, name, email, phone } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO booking (date, time, numOfPersons, name, email, phone) VALUES (?, ?, ?, ?, ?, ?)",
      [date, time, numOfPersons, name, email, phone]
    );
    res.status(201).json({ message: "Booking post successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
export default router;
