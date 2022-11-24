import {Response} from "express"

export const httpErrorHandler = (res : Response, errorTitle: String, error: any) => {
    res.status(500)
    res.json({
        Error: errorTitle, 
        Description: error
    })
}