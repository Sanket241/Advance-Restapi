require("dotenv").config()
const express = require('express')
const app = express()
const Connectdb = require('./Db/Conn')
const userRoute = require('./Routes/user-route')

const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/user",userRoute)

const start=async()=>{
try {
    await Connectdb(process.env.URL)
    app.listen(port,()=>{
        console.log(`Port is ready at ${port}`)
    })
    
} catch (error) {
    console.log(error)
}
}
start()