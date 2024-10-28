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

export const deleteLibros = async(req, res) => {
    const [result] = await pool.query('DELETE FROM libros WHERE id_libro = ?', [req.params.id])
    
    if(result.affectedRows <=0) return res.status(404).json({
        message: "Libro no encontrado"
    }) 
    res.sendStatus(204);
}

export const updateLibros = async(req, res) => {
    const {id} = req.params
    const {id_libro, titulo, fecha_publicacion, genero, id_autor} = req.body
    // console.log(id, titulo, fecha_publicacion, genero, id_autor)
    const [result] = await pool.query('UPDATE libros SET titulo = IFNULL(?, titulo), fecha_publicacion = IFNULL(?, fecha_publicacion), genero = IFNULL(?, genero), id_autor = IFNULL(?, id_autor) WHERE id_libro = ?',[titulo, fecha_publicacion, genero, id_autor, id])
    
    console.log(result)
    if(result.affectedRows === 0 ) return res.status(404).json({
        message: "Libro no encontrado"
    })

    const [rows] = await pool.query('SELECT * FROM libros WHERE id_libro = ?', [id])

    res.json(rows[0])
}


