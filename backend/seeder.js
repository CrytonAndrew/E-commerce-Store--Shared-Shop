import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import users from "./data/users.js"
import products from './data/products.js'
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import connectDB from './config/db.js'

//This file is no way connected to our server
dotenv.config()

connectDB()

// Everything returns a promise 
// So add async 
const importData = async () => {
    try{
        // Clear out all collections
        // Returns a promise so add awiat
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // Admin should have access to products
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id //This is due to the admin being the first user

        //We are returning all the products with the addition of the admin user to it
        const sampleProducts = products.map(product => { 
            return {
                ...product, user: adminUser
            }
        })

        await Product.insertMany(sampleProducts)
        console.log("Data imported!".green.inverse)

    } catch (error) {
        console.log(`Error while importing data: ${error.message}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        // Clear out all collections
        // Returns a promise so add awiat
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("Data destroyed!".red.inverse)
        process.exit()

    } catch (error) {
        console.log(`Error while destroying data: ${error.message}`.red.inverse)
        process.exit(1)
    }
}

//Setting up for command scripts:
// node backend/seeder => imports
// node backend/seeder -d => destroys
if(process.argv[2] === "-d") {
     destroyData()
}
else {
    importData()
}