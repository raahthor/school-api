import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/addSchool",(req,res)=>{})

router.get("/listSchools",(req,res)=>{})

export default router;
