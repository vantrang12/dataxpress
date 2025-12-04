import express from "express";
import {
  getOrganizations,
  createOrganization,
  updateOrganization,
  deleteOrganization,
  getOrganizationById
} from "../controllers/organizationsController.js";

const router = express.Router();

router.get("/", getOrganizations);
router.post("/", createOrganization);
router.get("/:id", getOrganizationById);
router.put("/:id", updateOrganization);
router.delete("/:id", deleteOrganization);

export default router;
