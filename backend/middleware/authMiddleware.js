import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from "../models/userModel.js"

// This is what we use to access protected routes 
// And we use the token 
// This middleware can then be added into any of our controllers that we want to protect
const protect = asyncHandler(async (req, res, next) => {
    let token 
    
    // Get the token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1] // Getting the token without the word 'Bearer'

            const decoded = jwt.verify(token, process.env.JWT_SECRET) // Returns the user id, ait and exp 
            
            req.user = await User.findById(decoded.id).select('-password') // Select excludes the password from the user data sent back

            next()
        } catch(error) {
            console.error(error)
            res.status(401)
            throw new Error("Not authoroized, token failed")
        }
    }
    
    if(!token) {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})

export {protect}