import {Schema, model} from "mongoose"
import { IUser } from "../interfaces/IUser"

const UserSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['subscriber', 'creator'],
            required: true
        },
        discordNumber: {
            type: Number,
            required: true
        }

    },
    //config features created with data
    {
        timestamps:true,
        versionKey:false
    }
)

//document/table name & the structure in the db  
export const userModel = model('users', UserSchema)