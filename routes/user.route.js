import {
  deleteUser,
  getNotificationNumber,
  getUser,
  getUsers,
  profilePosts,
  savePost,
  updateUser
} from "../controllers/user.controller.js";

import express from "express";

// import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);
// router.get("/:id", getUser);
// router.get("/search/:id", verifyToken, getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/save",  savePost);
router.get("/profilePosts",  profilePosts);
router.get("/notification",  getNotificationNumber);

export default router;