import { Router, Request, Response } from "express";
import { getUsers, getUser, updateUser, postUser, deleteUser } from "../controllers/user.controller";

export const router = Router()

router.get("/user", getUsers)
router.get("/user/:id", getUser)
router.post("/user", postUser)
router.post("/user/:id", updateUser)
router.get("/user/:id", deleteUser)
