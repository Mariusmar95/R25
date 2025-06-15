import express from "express";
import { db } from "../config/db";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO contacts( name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    res.status(201).json({ message: "Contact post successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
export default router;
