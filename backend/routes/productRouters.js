import express from 'express'
import {getProductById, getProducts, deleteProduct} from "../controllers/productController.js"
import {protect, admin} from "../middleware/authMiddleware.js"
const router = express.Router()

// We don't need any /api/products -> Since anything thats products related with point to this file

// All the functionality has been moved to the controller
// The controllers are in charge of all the functionality of the routes and querying the data
router.route("/").get(getProducts)

router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)

export default router

