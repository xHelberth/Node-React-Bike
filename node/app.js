import express from "express";
import cors from "cors";
import db from "./database/db.js";
import bikeRoutes from "./routes/routes.js";

const app = express()

app.use( cors())
app.use(express.json())

app.use('/bikes', bikeRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la BD')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

/*app.get('/', (req,res)=>{
    res.send('HOLA MUNDO')
    console.log
})
*/
app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})