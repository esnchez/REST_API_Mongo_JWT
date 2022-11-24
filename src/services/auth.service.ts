import { IUser } from "../interfaces/IUser";
import { userModel } from "../models/user.model";


export const loginUser = async ( {email, password }: IUser) => {
  return await userModel.findOne(
    {
      email: email,
    },

  );
};

