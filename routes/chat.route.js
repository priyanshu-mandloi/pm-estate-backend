import {
  addChat,
  getChat,
  getChats,
  readChat,
} from "../controllers/chat.controller.js";

import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/",getChats);
router.get("/:id", getChat);
router.post("/",addChat);
router.put("/read/:id" , readChat);

export default router;