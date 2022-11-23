import {Response} from "express"

export const httpErrorHandler = (res : Response, error: String) => {
    res.status(500)
    res.json({Error: error})
}