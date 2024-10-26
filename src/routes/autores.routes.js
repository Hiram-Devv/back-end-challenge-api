import {Router} from 'express'
import {getAutores, createAutores, updateAutores, deleteAutores, getAutor} from '../controllers/autores.controller.js'


const router = Router()

router.get('/autores', getAutores);
// Cuando a un lado de autores venga el id, 
router.get('/autores/:id', getAutor);

router.post('/autores', createAutores)

router.put('/autores', updateAutores)

router.delete('/autores/:id', deleteAutores);


export default router