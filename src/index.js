import express from 'express'
import autoresRoutes from './routes/autores.routes.js'
import indexRoutes from './routes/index.routes.js'
import librosRoutes from './routes/libros.routes.js'

const app = express();

app.use(express.json())

app.use(indexRoutes)
app.use('/api', autoresRoutes)
app.use(librosRoutes)



app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint Not Found'
    })
})

app.listen(3000);
console.log("Server running on port 3000")
