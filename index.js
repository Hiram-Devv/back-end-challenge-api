import express from 'express'
import {pool} from './db.js'

const app = express();

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
});

app.get('/autores', (req, res) => res.send('obteniendo autores'));

app.post('/autores', (req, res) => res.send('creando autores'));

app.put('/autores', (req, res) => res.send('actualizando autores'));

app.delete('/autores', (req, res) => res.send('eliminando autores'));



app.listen(3000);
console.log("Server running on port 3000")
