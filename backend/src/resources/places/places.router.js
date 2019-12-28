import { Router } from 'express'
import {
	getData,
	createPlace,
	getPlace,
	updatePlace,
} from './places.controllers'
import multer from 'multer'

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function(req, file, cb) {
		const filename = Date.now() + '-' + file.originalname

		cb(null, filename)
	},
})

const fileFilter = (req, file, cb) => {
	const isImage =
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg'

	if (isImage) {
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

router.get('/places', getData)
router.post('/place', upload.single('placeImage'), createPlace)
router.get('/place/:id', getPlace)
router.put('/place/:id', updatePlace)

export default router
