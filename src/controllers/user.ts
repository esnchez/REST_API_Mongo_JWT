import { Request, Response } from "express"
import { httpErrorHandler } from "../utils.ts/httpErrorHandler"

export const getUsers = (req: Request, res: Response) => {
    try {
        // res.json({data: "hello"})
    } catch (e) {
        httpErrorHandler(res, "GET_USERS", e)
    }
}

export const getUser = (req: Request, res: Response) => {
    try {
        // res.json({data: "hello"})
    } catch (e) {
        httpErrorHandler(res, "GET_USER", e)
    }
}

export const postUser = (req: Request, res: Response) => {
    try {
        // res.json({data: "hello"})
    } catch (e) {
        httpErrorHandler(res, "POST_USER", e)
    }
}

export const updateUser = (req: Request, res: Response) => {
    try {
        // res.json({data: "hello"})
    } catch (e) {
        httpErrorHandler(res, "UPDATE_USER", e)
    }
}

export const deleteUser = (req: Request, res: Response) => {
    try {
        // res.json({data: "hello"})
    } catch (e) {
        httpErrorHandler(res, "DELETE_USER", e)
    }
}