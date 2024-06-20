import {
  addMessage
} from "../controllers/message.controller.js";
import express from "express";

// import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();


router.post("/:chatId", addMessage);

export default router;