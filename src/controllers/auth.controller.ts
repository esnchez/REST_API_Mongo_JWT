import { Request, Response } from "express";
import { httpErrorHandler } from "../utils.ts/httpErrorHandler";
import { insertUser} from "../services/user.service";
import { loginUser } from "../services/auth.service";



export const signup = async (req: Request, res: Response) => {
    try {
      const resp = await insertUser(req.body)
      //TODO
      res.json({ data: resp });
    } catch (e) {
      httpErrorHandler(res, "SIGN_UP_USER", e);
    }
  };

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const resp = await loginUser(email, password)
    //TODO: Handling here login error responses as httpErrorHandler to send json with failed status etc. 
    res.json({ data: resp });
  } catch (e) {
    httpErrorHandler(res, "LOGIN_USER", e);
  }
};
