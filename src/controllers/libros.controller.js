import { pool } from '../db.js'

export const getLibros = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM libros')
        res.json(rows)
    } catch(error){
        return res.status(500).json({
            message: "Hubo un error"
        })
    }
}

export const getLibro = async (req, res) => {
    try{
        // Probar errores
        // throw new Error('Error inesperado')
        const [rows] = await pool.query('SELECT * FROM libros WHERE id_libro = ?',[req.params.id])
    
        if (rows.length <= 0 ) return res.status(404).json({
            message: "Libro no encontrado"
        })
        res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: "Hubo un error"
        })
    }
}

export const createLibros = async(req, res) => {
    const {id_libro, titulo, fecha_publicacion, genero, id_autor} = req.body
    try{
        // throw new Error('Error inesperado')
        const [rows] = await pool.query('INSERT INTO libros (id_libro, titulo, fecha_publicacion, genero, id_autor) VALUES (?, ?, ?, ?,?)',
            [id_libro, titulo, fecha_publicacion, genero, id_autor])
        res.send({
            id: rows.insertId,
            titulo,
            fecha_publicacion,
            genero,
            id_autor
    })
    } catch (error){
        return res.status(500).json({
            message:"Hubo un error"
        })
    }
}

export const deleteLibros = async(req, res) => {
    try{
        // throw new Error('Error inesperado')
        const [result] = await pool.query('DELETE FROM libros WHERE id_libro = ?', [req.params.id])
    
        if(result.affectedRows <=0) return res.status(404).json({
            message: "Libro no encontrado"
        }) 
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json({
            message: "Hubo un error"
        })
    }
}

export const updateLibros = async(req, res) => {
    const {id} = req.params
    const {id_libro, titulo, fecha_publicacion, genero, id_autor} = req.body
    // console.log(id, titulo, fecha_publicacion, genero, id_autor)
   try{
        // throw new Error('Error inesperado')
    const [result] = await pool.query('UPDATE libros SET titulo = IFNULL(?, titulo), fecha_publicacion = IFNULL(?, fecha_publicacion), genero = IFNULL(?, genero), id_autor = IFNULL(?, id_autor) WHERE id_libro = ?',[titulo, fecha_publicacion, genero, id_autor, id])
    
    console.log(result)
    if(result.affectedRows === 0 ) return res.status(404).json({
        message: "Libro no encontrado"
    })

    const [rows] = await pool.query('SELECT * FROM libros WHERE id_libro = ?', [id])

    res.json(rows[0])
   } catch(error){
    return res.status(500).json({
        message: "Hubo un error"
    })
   }
}


