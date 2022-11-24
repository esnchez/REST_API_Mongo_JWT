import { Router, Request, Response } from "express";
import { getUsers, getUser, postUser, deleteUser, putUser } from "../controllers/user.controller";
import { logService } from "../middleware/log";
import { sessionChecker } from "../middleware/session";


export const router = Router()
//protect routes with sessionChecker middleware, checking the token you obtain when logging in (with your email as key). 
router.get("/user", sessionChecker, getUsers)
router.get("/user/:id", getUser)
//protect this POST route with role-based permission. Users will be created from auth route.
router.post("/user", postUser)
router.put("/user/:id", putUser)
router.delete("/user/:id", deleteUser)
