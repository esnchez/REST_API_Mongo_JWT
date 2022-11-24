import { IUser } from "../interfaces/IUser";
import { IError } from "../interfaces/IError";
import { encrypt } from "../utils.ts/bcryptHandler";
import { userModel } from "../models/user.model";

export const insertUser = async ({firstName, lastName, email, password, role, discordNumber}: IUser) => {
    const checkUser = await userModel.findOne({email : email})
    //TODO: Bring the error to the controller to handle it. 
    if(checkUser){
        const error : IError = {
            Description: "User already created! "
        }
      return error
    }
    // 
    const pwHashed = await encrypt(password)
          
  return await userModel.create({firstName, lastName, email, password: pwHashed, role, discordNumber });
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
