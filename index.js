const express = require('express')
require('dotenv').config()


const app = express()
const connectDB = require('./connect')
const cors = require('cors')
const router =require("./routes/tasks")

//middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/tasks", router)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()



