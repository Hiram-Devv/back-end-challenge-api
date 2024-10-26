import {pool} from '../db.js'

export const getAutores = async (req, res) => {
    
    const [rows] = await pool.query('SELECT * FROM autores')
    res.json(rows)
}

export const getAutor = async (req, res) => {
    
    const [rows] = await pool.query('SELECT * FROM autores WHERE id_autor = ?', [req.params.id])
    console.log(rows);

    if (rows.length <= 0) return res.status(404).json({
        message: 'Autor no encontrado'
    })
    
    res.json(rows[0]);
}


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