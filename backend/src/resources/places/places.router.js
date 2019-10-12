import { Router } from 'express'
import { getData, createPlace, getPlace } from './places.controllers'

const router = Router()

// /api/list
router.get('/', getData)
router.post('/place', createPlace)
router.get('/place/:id', getPlace)

export default router
