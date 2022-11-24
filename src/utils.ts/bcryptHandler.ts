import { hash, compare} from "bcryptjs"

export const encrypt = async (password: string) => {
   return await hash(password,8)
} 


export const verify = async(password: string, pwHashed: string) => {
    return await compare(password,pwHashed)    
} 
