import express from "express"
import cors from "cors"
import "dotenv/config"
import {router} from "./routes"
import { dbConnect } from "./dbConfig/mongo"

const PORT = process.env.PORT || 3001
const app = express()

//cors can define a middleware for requests, default config by now (enable all cors requests)
app.use(cors())
//Able to read json requests
app.use(express.json())
app.use(router)

dbConnect().then(() => {console.log("DB connected successfully")})
app.listen(PORT, ()=> {console.log("Server running at port: ", PORT)})