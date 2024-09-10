import express from "express";
import {
  getUsers,
  createUser,
  getUserById,
  login,
  getUserByEmail,
} from "../users/user_controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createUser);
router.get("/:email", getUserByEmail);
router.post("/login", login);

export default router;
