import { Router } from "express";
import upload from "../middleware/upload.middleware.js";
import {
  previewImport,
  confirmImport,
} from "../controllers/import.controller.js";

const router = Router();

router.post("/preview", upload.single("file"), previewImport);

router.post("/confirm", confirmImport);

export default router;