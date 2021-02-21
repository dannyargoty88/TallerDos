//Importar mongoose
const moongose = require('mongoose')

const Cliente = moongose.model('cliente')
const Libro = moongose.model('libro')

const esquemaVenta = new moongose.Schema(
    {
        fecha: {
            type:Date, 
            default: Date.now
        },
        total: Number,
        cliente: {type: moongose.Schema.ObjectId, ref: "cliente"},
        detalle:{
            libro: {type: moongose.Schema.ObjectId, ref: "libro"},
            cantidad: Number
        }
    }
)

//definir el export
const Venta = moongose.model("venta",esquemaVenta)
module.exports = Venta;
