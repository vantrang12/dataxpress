import express from "express";
import {
  getOrganizations,
  createOrganization,
  updateOrganization,
  deleteOrganization
} from "../controllers/organizationsController.js";

const router = express.Router();

router.get("/", getOrganizations);
router.post("/", createOrganization);
router.put("/:id", updateOrganization);
router.delete("/:id", deleteOrganization);
router.get('/:id', organizationsController.getOrganizationById);

export default router;
