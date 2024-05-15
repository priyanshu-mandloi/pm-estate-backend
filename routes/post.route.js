import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("first");
  res.send("Test route");
});

export default router;