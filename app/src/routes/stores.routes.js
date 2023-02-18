import { Router } from 'express'
import { create, findById, getAll, remove, update } from '../controllers/storeController.js'

const router = Router()

router.get('/stores', getAll)
router.get('/stores/:id', findById)
router.post('/stores',  create)
router.put('/stores/:id', update)
router.delete('/stores/:id', remove)

export default router