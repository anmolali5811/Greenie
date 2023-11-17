import { Router } from "express";
import {
  getAllUsers, createUsersInBulk, getUserById
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUsersInBulk);
router.route("/:id").get(getUserById);

export default router;