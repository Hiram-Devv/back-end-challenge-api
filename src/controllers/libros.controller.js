import { pool } from '../db.js'

export const getLibros = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM libros')
    res.json(rows)
}

export const getLibro = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM libros WHERE id_libro = ?',[req.params.id])
    
    if (rows.length <= 0 ) return res.status(404).json({
        message: "Libro no encontrado"
    })
    res.json(rows[0])
}

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
