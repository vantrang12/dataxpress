import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./src/routes/users.js";
import organizationsRoutes from "./src/routes/organizations.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/users", usersRoutes);
app.use("/organizations", organizationsRoutes);

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`API running at http://localhost:${process.env.PORT}`);
});
