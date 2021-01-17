import express from 'express'
import {authUser, getUserProfile, registerUser, updateUserProfile, getUsers} from '../controllers/userController.js'
import {protect, admin} from "../middleware/authMiddleware.js"
const router = express.Router()

router.route("/").post(registerUser).get(protect, admin ,getUsers)

router.post('/login', authUser)

// We add the protect middleware that is gonna run everytime we hit this route
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)


export default router