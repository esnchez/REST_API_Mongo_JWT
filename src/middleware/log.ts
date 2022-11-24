import {Request, Response, NextFunction} from "express"

//next function allows execution to continue and reach the controller 
export const logService = (req: Request, res: Response, next : NextFunction) => {
    console.log("Logs to check later! ")
    next()
}