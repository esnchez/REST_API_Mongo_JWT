import { userModel } from "../models/user.model";
import { IError } from "../interfaces/IError";
import { verify } from "../utils.ts/bcryptHandler";
import { createToken } from "../utils.ts/jwtHandler";

export const loginUser = async (email: string, password: string) => {
  const checkedUser = await userModel.findOne({ email: email });
  if (!checkedUser) {
    return invalidKeys();
  }
  const verified = await verify(password, checkedUser.password);
  if (!verified) {
    return invalidKeys();
  }
  //create token with a unique string: id, email (model controlled)
  const jwt = createToken(checkedUser.email)
  const data = {
    token: jwt,
    user: checkedUser
  }
  return data;
};

const invalidKeys = (): IError => {
  const error: IError = {
    Description: "Invalid keys",
  };
  return error;
};
