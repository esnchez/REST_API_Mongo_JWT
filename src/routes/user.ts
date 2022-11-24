import { Router, Request, Response } from "express";
import { getUsers, getUser, postUser, deleteUser, putUser } from "../controllers/user.controller";
import { logService } from "../middleware/log";

export const router = Router()

router.get("/user", logService, getUsers)
router.get("/user/:id", getUser)
//protect this POST route with role-based permission. Users will be created from auth route.
router.post("/user", postUser)
router.put("/user/:id", putUser)
router.delete("/user/:id", deleteUser)
