import express from 'express'

const app = express();

app.get('/autores', (req, res) => res.send('obteniendo autores'));

app.post('/autores', (req, res) => res.send('creando autores'));

app.put('/autores', (req, res) => res.send('actualizando autores'));

app.delete('/autores', (req, res) => res.send('eliminando autores'));



app.listen(3000);
console.log("Server running on port 3000")
