import { Router } from 'express'
import {getLibros, createLibros, updateLibros, deleteLibros} from '../controllers/libros.controller.js'

const router = Router()

router.get('/libros', getLibros)

router.post('/libros', createLibros)

router.put('/libros', updateLibros)

router.delete('/libros', deleteLibros)


export default router