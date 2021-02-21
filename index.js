const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const cliente = require('./routes/cliente')
const libro = require('./routes/libro')
const venta = require('./routes/venta')

const app = express()
app.use(cors())//intemediario cliente servidor
app.use(express.json())

app.use("/api/cliente",cliente)
app.use("/api/libro",libro)
app.use("/api/venta",venta)


const port = process.env.PORT || 3000
app.listen(port, ()=> {console.log("Sevidor ejecutando en puerto",port)})

mongoose.connect("mongodb://localhost/libreriadb",{
    useNewUrlParser:true, 
    useFindAndModify:false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexion DB True')
})
.catch((error) => {
    console.log('Conexion DB False. ',error)
})