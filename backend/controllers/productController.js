import asyncHandler from 'express-async-handler'
import Product from "../models/productModel.js"

// @desc Fecth all products 
// @route GET /api/producst
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    //Querying for data from the database since we have already used a seeder to import data 
    //await is used since we not using the .then syntax 
    const products = await Product.find({})

    res.json(products) //Converts it into the json format file 
})

// @desc Fecth single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res)=> {
    const product = await Product.findById(req.params.id )
        if (product){
            res.json(product)
        }
        else {
            res.status(404)
            throw new Error("Product not Found")
        }
})

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/admin
const deleteProduct = asyncHandler(async (req, res)=> {
    const product = await Product.findById(req.params.id )

        if (product){
            await product.remove()
            res.json({message: "Product removed"})
        }
        else {
            res.status(404)
            throw new Error("Product not Found")
        }
})

export {getProducts, getProductById, deleteProduct}