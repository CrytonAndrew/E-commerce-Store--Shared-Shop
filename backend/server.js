//We use common JS below
//Using ES modules
import path from 'path'
import express from 'express'
import dotenv from "dotenv"
import colors from 'colors'
import morgan from "morgan" // Logger -> Prints all routes 
import connectDB from "./config/db.js"
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"

import productRoutes from "./routes/productRouters.js"
import userRoutes from './routes/userRoutes.js'
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import e from 'express'

dotenv.config()

connectDB()

const app = express()

//Run in development mode 
if(process.env.NODE_ENV == "development") {
    app.use(morgan('dev'))
}

app.use(express.json()) //This is an alternative to body parser ->  Allowing us to accept JSON data 

// Will be deleted when deploying
app.get("/", (req, res) => {
    res.send("API running...")
})

const __dirname = path.resolve()


// Using the productsRoute when needed
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)

app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))


// The uploads folder is not accessible by defualt,
// so it needs to be stack for it to be read by browser

app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold));