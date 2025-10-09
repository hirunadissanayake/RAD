import { Router, Request, Response } from "express";
import { createUser, getAllUsers } from "../controller/userController";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);

export default router;