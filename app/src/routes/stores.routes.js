import { Router } from 'express'
import { create, findById, getAll, remove, update } from '../controllers/storeController.js'

const router = Router()

router.get('/store', getAll)
router.get('/store/:id', findById)
router.post('/store',  create)
router.put('/store/:id', update)
router.delete('/store/:id', remove)

export default router