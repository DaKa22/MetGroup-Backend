import { Router } from 'express'
import { create, findById, getAll, relationArticleStore, remove, update } from '../controllers/articleController.js'

const router = Router()

router.get('/article', getAll)
router.get('/article/:id', findById)
router.post('/article/asign', relationArticleStore)
router.post('/article', create)
router.put('/article/:id', update)
router.delete('/article/:id', remove)

export default router