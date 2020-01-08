import { Router } from 'express'
import { upload } from './place.upload'

import {
	getData,
	createPlace,
	getPlace,
	updatePlace,
} from './places.controllers'

const router = Router()

router.get('/places', getData)
router.post('/place', upload.single('placeImage'), createPlace)
router.get('/place/:id', getPlace)
router.put('/place/:id', updatePlace)

export default router
