const express = require("express")
const app = express()
require('dotenv').config()
const PORT=process.env.PORT || 8080
require('./Models/db')
const bodyParser =require('body-parser')
const cors = require('cors')
const AuthRouter = require("./Routes/AuthRouter")


app.use(bodyParser.json())
app.use(cors())
app.use("/auth", AuthRouter)
app.use("/product", AuthRouter)

app.get("/ping",(req,res)=>{
    res.send("Pong")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})