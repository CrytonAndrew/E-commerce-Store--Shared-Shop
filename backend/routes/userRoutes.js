import express from 'express'
import {authUser, getUserProfile, registerUser} from '../controllers/userController.js'
import {protect} from "../middleware/authMiddleware.js"
const router = express.Router()

router.route("/").post(registerUser)

router.post('/login', authUser)

// We add the protect middleware that is gonna run everytime we hit this route
router.route("/profile").get(protect, getUserProfile)


export default router