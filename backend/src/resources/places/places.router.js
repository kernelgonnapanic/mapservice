import { Router } from 'express'
import {
	getData,
	createPlace,
	getPlace,
	updatePlace,
} from './places.controllers'

const router = Router()

// /api/list
router.get('/places', getData)
router.post('/place', createPlace)
router.get('/place/:id', getPlace)
router.put('/place/:id', updatePlace)

export default router
