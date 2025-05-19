import express from "express";
import { db } from "../config/db";
import { RowDataPacket } from "mysql2/promise";
import { Product } from "../types/types";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM menu_items");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (_req, res) => {
  try {
    const { id } = _req.params;
    // console.log(_req.query.params);
    const [rows] = await db.query<Product[] & RowDataPacket[]>(
      "SELECT * FROM menu_items WHERE id = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
