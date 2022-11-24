import { Router, Request, Response } from "express";
import { getUsers, getUser, postUser, deleteUser, putUser } from "../controllers/user.controller";
// import { logService } from "../middleware/log";
import { login, signup } from "../controllers/auth.controller";

export const router = Router()

router.post("/signup", signup)
router.post("/login", login)

