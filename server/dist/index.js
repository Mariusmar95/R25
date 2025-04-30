import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import menuRoutes from "./routes/menu";
import { fileURLToPath } from "url";
import path from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use("/menu", menuRoutes);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
