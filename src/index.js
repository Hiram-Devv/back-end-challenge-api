import express from 'express'
import autoresRoutes from './routes/autores.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json())

app.use(indexRoutes)
app.use(autoresRoutes)

app.listen(3000);
console.log("Server running on port 3000")
