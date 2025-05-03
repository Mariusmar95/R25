import express from "express";
import { db } from "../config/db";

const router = express.Router();
// Get all items from menu
router.get("/", (_req, res) =>{
    try {
      const [rows] = yield db.query("SELECT * FROM menu_items");
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
});

// Get a single item by id
router.get("/:id",async (_req,res)=>{
const {id} = _req.params;
try{
    const [rows] = await db.query("SELECT * FROM menu_items WHERE id = ?",[id])
    if(!rows || (Array.isArray(rows) && rows.length ===0 )){
        return res.status(404).json({message:"Product not found"})
    }
    res.json(rows[0]);
}
catch(err){
    console.log(err);
    res.status(500).json({message:"Server error"});
}
})

export default router;