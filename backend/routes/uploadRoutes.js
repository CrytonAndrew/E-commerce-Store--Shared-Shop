import path from "path"
import express from "express"
import multer from "multer"
const router = express.Router()

// This is form multer docs
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/') // 'uploads/' is where we wanna upload
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`) // File have to have different name, so the date makes it different
    }
})

// Checks extension type
function checkFileType(file, cb){
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase()) // Return a boolean
    const mimetype = filetypes.test(file.mimetype)

    if(extname && mimetype) {
        return cb(null, true)
    }
    else {
        cb("Images only!")
    }
}

// Middleware for our route, which doesn't allow us to upload any file 
const upload = multer({
    storage,
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb)
    }
})

router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
})

export default router