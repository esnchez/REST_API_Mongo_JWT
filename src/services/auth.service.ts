import { userModel } from "../models/user.model";
import { IError } from "../interfaces/IError";
import { verify } from "../utils.ts/bcryptHandler";

export const loginUser = async (email: string, password: string) => {
  const checkUser = await userModel.findOne({ email: email });
  if (!checkUser) {
    return invalidKeys();
  }
  const verified = await verify(password, checkUser.password);
  if (!verified) {
    return invalidKeys();
  }

  return verified;
};

const invalidKeys = (): IError => {
  const error: IError = {
    Description: "Invalid keys",
  };
  return error;
};
