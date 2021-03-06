import asyncHandler from 'express-async-handler'
import Product from "../models/productModel.js"

// @desc Fecth all products 
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    //Querying for data from the database since we have already used a seeder to import data 
    //await is used since we not using the .then syntax 

    //Pagination
    const pageSize = 10 // Number of products perPage
    const page  = Number(req.query.pageNumber) || 1


    // Account for when searching or else return all products
    // Test for query strings, use of a question mark '?' -> `/api/products?keyword=${keyword}`
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword, //Regex allows for filtering with out having to put in the whole name
            $options: "i"
        }
    } : {}

    const count = await Product.countDocuments({ ...keyword})

    // If page 1 we get the first limit of products,
    // if page 2 we get another limit per page without page 1 products
    const products = await Product.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1)) 

    res.json({products, page, pages: Math.ceil(count / pageSize)}) //Converts it into the json format file 
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

// @desc Create a product
// @route POST /api/products
// @access Private/admin
const createProduct = asyncHandler(async (req, res)=> {
    const product = new Product({  
        name: "Sample Name",
        price: 0,
        user: req.user._id,
        image: "/images/sample.jpg",
        brand: "Sample Brand",
        category: "Sample Category",
        countInStock: 0,
        numReviews: 0, 
        description: "Sample Description"
    })

    const createProduct = await product.save()

    res.status(201).json(createProduct)
})

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/admin
const updateProduct = asyncHandler(async (req, res)=> {
    const {name, price, description, image, brand, category, countInStock} = req.body

    const product = await Product.findById(req.params.id)

    if(product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.status(201).json(updatedProduct)
    }
    else {
        res.status(404).json("Product Not Found")
    }
})

// @desc Create a new review
// @route POST /api/products/:id/reviews
// @access Private
const createProductReview = asyncHandler(async (req, res)=> {
    const {rating, comment} = req.body

    const product = await Product.findById(req.params.id)

    if(product) {
        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())

        if (alreadyReviewed) {
            res.status(400)
            throw new Error("Product already reviewed")
        }

        const review  = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        product.reviews.push(review)

        product.numReviews = product.reviews.length

        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

        await product.save()

        res.status(201).json({message: "Review added"})


    }
    else {
        res.status(404).json("Product Not Found")
    }
})

// @desc Get top rated products
// @route GET /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res)=> {
    // Sorting the ratings in ascending order and taking the top 3
    const products = await Product.find({}).sort({rating: -1}).limit(3)
    res.json(products)
})

// @desc Get Electronics Category
// @route GET /api/products/electronics
// @access Public
const getProductsByCategoryElectronics = asyncHandler(async (req, res) => {
    const products = await Product.find({category: "Electronics"})
    res.json(products)
})

export {getProducts, getProductById, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts, getProductsByCategoryElectronics}