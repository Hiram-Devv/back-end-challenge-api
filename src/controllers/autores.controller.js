import {pool} from '../db.js'

export const getAutores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM autores')
        res.json(rows)
    } catch (error){
        return res.status(500).json({
            message:  "Hubo un error"
        })
    }
}

export const getAutor = async (req, res) => {
    try{
        
    const [rows] = await pool.query('SELECT * FROM autores WHERE id_autor = ?', [req.params.id])
    console.log(rows);

    if (rows.length <= 0) return res.status(404).json({
        message: 'Autor no encontrado'
    })

    res.json(rows[0]);
    } catch (error){
        return res.status(500).json({
            message: "Hubo un error"
        })
    }
}


export const createAutores = async(req, res) => {
    const {nombre, nacionalidad, fecha_nacimiento} = req.body

    try{

    const [rows] = await pool.query('INSERT INTO autores (nombre, nacionalidad, fecha_nacimiento) VALUES (?, ?, ?)', [nombre, nacionalidad, fecha_nacimiento])
    res.send({
        id: rows.insertId,
        nombre,
        nacionalidad,
        fecha_nacimiento
    })
    } catch (error){
        return res.status(500).json({
            message: "Hubo un error"
        })
    }
}

export const deleteAutores = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM autores WHERE id_autor = ?', [req.params.id]);
    
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Autor no encontrado'
    })
    
    res.sendStatus(204);
    } catch (error){
        return res.status(500).json({
            message: "Hubo un error"
        })
    }
}


export const updateAutores = async (req, res) => {
    const { id } = req.params
    const { nombre, nacionalidad, fecha_nacimiento, id_autor } = req.body
    try{
            const [result] = await pool.query('UPDATE autores SET nombre = IFNULL(?, nombre), nacionalidad = IFNULL(?, nacionalidad), fecha_nacimiento =IFNULL(?, fecha_nacimiento) WHERE id_autor = ?', 
                        [nombre, nacionalidad, fecha_nacimiento, id])

        if(result.affectedRows === 0) return res.status(404).json({
            message: "Autor no encontrado"
        })

        const [rows] = await pool.query('SELECT * FROM autores WHERE id_autor = ?',[id])
        console.log(result)
        res.json(rows)
    } catch (error){
        res.status(500).json({
            message: "Hubo un error"
        })
    }
    
}
