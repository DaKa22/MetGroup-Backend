import { Router } from 'express';
import userRoute from './users.routes.js'
import articleRoute from './articles.routes.js'
import storeRoute from './stores.routes.js'


const router = Router()


router.use(userRoute)
router.use(articleRoute)
router.use(storeRoute)

export default router
