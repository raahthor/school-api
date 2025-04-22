import express from "express";
import addSchool from "../controllers/addSchool.controller.js";
import { validateData } from "../utils/validateData.js";
import getSchools from "../controllers/getSchools.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/addSchool", validateData, addSchool);

router.get("/listSchools", getSchools);

export default router;
