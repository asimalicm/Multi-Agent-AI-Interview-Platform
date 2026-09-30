import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
dotenv.config()

const app = express()

const PORT = process.env.PORT || 6000

app.get("/", (req, res)=>{
    res.send("Hello from gateway")
})

app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL))
1
app.listen(PORT , ()=>{
    console.log('Gateway started on ${PORT}')
})