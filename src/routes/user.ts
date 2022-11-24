import { Router, Request, Response } from "express";
import { getUsers, getUser, postUser, deleteUser, putUser } from "../controllers/user.controller";

export const router = Router()

router.get("/user", getUsers)
router.get("/user/:id", getUser)
router.post("/user", postUser)
router.put("/user/:id", putUser)
router.delete("/user/:id", deleteUser)
