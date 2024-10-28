import { createPool } from 'mysql2/promise'

// Crear conexión a la base de datos

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '[root_password];',
    port: 3306,
    database: 'bibliotecadb'
})
