import {Request, Response, NextFunction} from "express"
import { verifyToken } from "../utils.ts/jwtHandler"

//TODO, error handlers
export const sessionChecker = (req: Request, res: Response, next : NextFunction) => {
    try {
        const tokenString =  req.headers.authorization || ""
        const token = tokenString?.split(" ").pop()
        const user = verifyToken(`${token}`)
        
        if(!user){
            res.status(401)
            res.send("Session not valid")
        }
        next()

    } catch (e) {
        console.log(e)
        res.status(400)
        res.json({
            jwt_error: "Authorization not valid"
        })
    }
} 