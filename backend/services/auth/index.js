import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

const PORT = process.env.PORT || 6001

app.get("/", (req, res)=>{
    res.send("Hello from Auth services")
})
app.listen(PORT , ()=>{
    console.log('Auth service started on ${PORT}')
})