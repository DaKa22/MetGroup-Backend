import { Router } from 'express'
import { create, findById, getAll, remove, update, loginUser } from '../controllers/userController.js'

const router = Router()

router.post('/login', loginUser)

router.get('/users', getAll)
router.get('/users/:id', findById)
router.post('/users', create)
router.put('/users/:id', update)
router.delete('/users/:id', remove)

export default router