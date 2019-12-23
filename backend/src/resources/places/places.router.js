import { Router } from 'express'
import {
	getData,
	createPlace,
	getPlace,
	updatePlace,
	// uploadFile,
} from './places.controllers'
import multer from 'multer'

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname)
	},
})

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg'
	) {
		cb(null, true)
	} else {
		cb(new Error('File should have jpeg/png/jpg format!'), false)
	}
}

const upload = multer({
	storage: storage,
	fileFilter,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
})

const router = Router()

// /api/list
router.get('/places', getData)
router.post('/place', upload.single('placeImage'), createPlace)
router.get('/place/:id', getPlace)
router.put('/place/:id', updatePlace)

export default router
