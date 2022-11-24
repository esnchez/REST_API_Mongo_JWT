import { Request, Response } from "express"
import { IUser } from "../interfaces/IUser"
import { userModel } from "../models/user.model"

export const insertUser = async (user : IUser) => {
    return await userModel.create(user)
}

export const getAllUsers = async () => {
    return await userModel.find({})
}

export const getUserById = async ( id: string) => {
    return await userModel.findOne({_id: id})
}