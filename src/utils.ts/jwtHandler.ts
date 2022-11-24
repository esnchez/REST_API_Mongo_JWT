import {sign, verify} from "jsonwebtoken"

const JWT_SK = process.env.JWT_SECRET || "defaultTokenSecret"

export const createToken = (id: string) => {
    //There is also sign options as 3rd arg
    return sign({id}, JWT_SK)
}


export const verifyToken = (jwt: string) => {
    return verify(jwt, JWT_SK)
}