import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from "../models/productModel.js"

//We don't need any /api/products -> Since anything thats products related with point to this file

// @desc Fecth all products 
// @route GET /api/producst
// @access Public
router.get("/", asyncHandler(async (req, res) => {
    //Querying for data from the database since we have already used a seeder to import data 
    //await is used since we not using the .then syntax 
    const products = await Product.find({})

    res.json(products) //Converts it into the json format file 
})
)


// @desc Fecth single product
// @route GET /api/products/:id
// @access Public
router.get("/:id", asyncHandler( async (req, res) => {
        const product = await Product.findById(req.params.id )
        if (product){
            res.json(product)
        }
        else {

            res.status(404)
            throw new Error("Product not Found")
        }
        
    })
)


export default router

