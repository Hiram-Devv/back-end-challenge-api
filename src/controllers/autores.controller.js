import {pool} from '../db.js'

export const getAutores = (req, res) => res.send('obteniendo autores');

export const createAutores = async(req, res) => {
    const {nombre, nacionalidad, fecha_nacimiento} = req.body

    const [rows] = await pool.query('INSERT INTO autores (nombre, nacionalidad, fecha_nacimiento) VALUES (?, ?, ?)', [nombre, nacionalidad, fecha_nacimiento])
    res.send({
        id: rows.insertId,
        nombre,
        nacionalidad,
        fecha_nacimiento
    })
}

export const updateAutores = (req, res) => res.send('actualizando autores');

export const deleteAutores = (req, res) => res.send('eliminando autores');