import { pool } from '../db.js'

export const getLibros = (req, res) => res.send('Obteniendo libros')

export const createLibros = async(req, res) => {
    const {id_libro, titulo, fecha_publicacion, genero, id_autor} = req.body

    const [rows] = await pool.query('INSERT INTO libros (id_libro, titulo, fecha_publicacion, genero, id_autor) VALUES (?, ?, ?, ?,?)',
         [id_libro, titulo, fecha_publicacion, genero, id_autor])
    res.send({
        id: rows.insertId,
        titulo,
        fecha_publicacion,
        genero,
        id_autor
    })
}

export const updateLibros = (req, res) => res.send('Actualizando libros')

export const deleteLibros = (req, res) => res.send('Eliminando libros')
