import { Request, Response } from "express";
import { httpErrorHandler } from "../utils.ts/httpErrorHandler";
import { insertUser, getAllUsers, getUserById } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const responseUsers = await getAllUsers();
    res.json({ data: responseUsers });
  } catch (e) {
    httpErrorHandler(res, "GET_USERS", e);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const responseUser = await getUserById(req.params.id);
    res.json({ responseUser });
  } catch (e) {
    httpErrorHandler(res, "GET_USER", e);
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const responseUser = await insertUser(req.body);
    res.json({ data: responseUser, desc: "Post done successfully" });
  } catch (e) {
    httpErrorHandler(res, "POST_USER", e);
  }
};

export const updateUser = (req: Request, res: Response) => {
  try {
    // res.json({data: "hello"})
  } catch (e) {
    httpErrorHandler(res, "UPDATE_USER", e);
  }
};

export const deleteUser = (req: Request, res: Response) => {
  try {
    // res.json({data: "hello"})
  } catch (e) {
    httpErrorHandler(res, "DELETE_USER", e);
  }
};
