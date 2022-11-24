import { hash, compare} from "bcryptjs"

export const encrypt = async (password: string) => {
   return await hash(password,8)
} 


const verify = async() => {
    
} 
