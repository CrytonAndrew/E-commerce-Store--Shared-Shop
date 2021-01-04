//We use common JS below
//Using ES modules
import express from 'express';
import products from './data/products.js';
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.get("/", (req, res) => {
    res.send("API running...")
})
app.get("/api/products", (req, res) => {
    res.json(products) //Converts it into the json format file 
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id )
    res.json(product)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));