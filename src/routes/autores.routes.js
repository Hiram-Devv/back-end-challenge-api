import {Router} from 'express'
import {getAutores, createAutores, updateAutores, deleteAutores} from '../controllers/autores.controller.js'


const router = Router()

router.get('/autores', getAutores);

router.post('/autores', createAutores)

router.put('/autores', updateAutores)

router.delete('/autores', deleteAutores);


export default router