import express from 'express'
import { getAllImages } from '../controllers/images'

const router = express.Router()

router.get('/getAllImages', getAllImages)

export default router