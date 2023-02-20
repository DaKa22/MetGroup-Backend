import { Router } from 'express'
import { create, findById, getAll, remove, update } from '../controllers/articleController.js'

const router = Router()

router.get('/articles', getAll)
router.get('/articles/:id', findById)
router.post('/articles', create)
router.put('/articles/:id', update)
router.delete('/articles/:id', remove)

export default router