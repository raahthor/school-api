import express from "express";
import addSchool from "../controllers/addSchool.controller.js";
import { validateData } from "../utils/validateData.js";
import listSchools from "../controllers/listSchools.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello, access other endpoints using postman or similar service");
});

router.post("/addSchool", validateData, addSchool);

router.get("/listSchools", listSchools);

export default router;
