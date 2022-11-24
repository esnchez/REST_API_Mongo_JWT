import { Request, Response } from "express";
import { httpErrorHandler } from "../utils.ts/httpErrorHandler";
import { insertUser, getAllUsers, getUserById, removeUser, updateUser } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const resp = await getAllUsers();
    res.json({ data: resp });
  } catch (e) {
    httpErrorHandler(res, "GET_USERS", e);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const resp = await getUserById(req.params.id);
    res.json({ resp });
  } catch (e) {
    httpErrorHandler(res, "GET_USER", e);
  }
};


export const postUser = async (req: Request, res: Response) => {
  try {
    const resp = await insertUser(req.body);
    res.json({ data: resp});
  } catch (e) {
    httpErrorHandler(res, "CREATE_USER", e);
  }
};

export const putUser = async (req: Request, res: Response) => {
  try {
    const resp = await updateUser(req.params.id, req.body)
    res.json({data: resp})
  } catch (e) {
    httpErrorHandler(res, "UPDATE_USER", e);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const resp = await removeUser(req.params.id)
    res.json({ data: resp });
  } catch (e) {
    httpErrorHandler(res, "DELETE_USER", e);
  }
};
