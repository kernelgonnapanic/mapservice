import { Router } from 'express'
import { getData } from './places.controllers'

const router = Router()

// /api/list
router.get('/', getData)

export default router
