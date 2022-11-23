import express from "express"
import cors from "cors"
import "dotenv/config"

const PORT = process.env.PORT || 3001
const app = express()

//cors can define a middleware for requests, default config by now (enable all cors requests)
app.use(cors())
app.listen(PORT, ()=> {console.log("Server running at port: ", PORT)})