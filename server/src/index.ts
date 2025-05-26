import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import menuRoutes from "./routes/menu";
import contactRoutes from "./routes/contact";

import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());

app.use("/menu", menuRoutes);
app.use("/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
