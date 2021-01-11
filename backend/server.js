//We use common JS below
//Using ES modules
import express from 'express'
import dotenv from "dotenv"
import colors from 'colors'
import connectDB from "./config/db.js"
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"

import productRoutes from "./routes/productRouters.js"
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json()) //This is an alternative to body parser ->  Allowing us to accept JSON data 

app.get("/", (req, res) => {
    res.send("API running...")
})

// Using the productsRoute when needed
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold));