import {Router} from 'express'


const router = Router()

router.get('/autores', (req, res) => res.send('obteniendo autores'));

router.post('/autores', (req, res) => res.send('creando autores'));

router.put('/autores', (req, res) => res.send('actualizando autores'));

router.delete('/autores', (req, res) => res.send('eliminando autores'));


export default router