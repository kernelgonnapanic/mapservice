import multer from 'multer'

export const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function(req, file, cb) {
		const filename = Date.now() + '-' + file.originalname

		cb(null, filename)
	},
})

export const fileFilter = (req, file, cb) => {
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

export const upload = multer({
	storage: storage,
	fileFilter,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
})
