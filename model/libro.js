//Importar mongoose
const moongose = require('mongoose')

const esquemaLibro = new moongose.Schema(
    {
        nombre: String,
        caratula: String,
        descripcion: String,
        valorunitario: Number,
        categoria: [String],
        fechaRegistro: {
            type:Date, 
            default: Date.now
        }
    }
)

//definir el export
const Libro = moongose.model("libro",esquemaLibro)
module.exports = Libro;
