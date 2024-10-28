import { Router } from 'express'
import {getLibros, createLibros, updateLibros, deleteLibros, getLibro} from '../controllers/libros.controller.js'

const router = Router()

router.get('/libros', getLibros)

router.get('/libros/:id', getLibro)

router.post('/libros', createLibros)

router.patch('/libros/:id', updateLibros)

router.delete('/libros/:id', deleteLibros)


export default router