import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";

import express from "express";

// import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/should-be-logged-in", shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

export default router;