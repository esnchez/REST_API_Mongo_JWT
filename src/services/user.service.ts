import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import { userModel } from "../models/user.model";

export const insertUser = async (user: IUser) => {
  return await userModel.create(user);
};

export const getAllUsers = async () => {
  return await userModel.find({});
};

export const getUserById = async (id: string) => {
  return await userModel.findOne({ _id: id });
};

//new:true tells mongoose to give back the updated user data
export const updateUser = async (id: string, user: IUser) => {
  return await userModel.findOneAndUpdate(
    {
      _id: id,
    },
    user,
    { new: true }
  );
};

export const removeUser = async (id: string) => {
  return await userModel.deleteOne({ _id: id });
};
