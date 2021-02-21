//Importar mongoose
const moongose = require('mongoose')

const esquemaCliente = new moongose.Schema(
    {
        nombre: String,
        direccion: String,
        celular: Number,
        correo: String,
        contrasena: String,
        fechaRegistro: {
            type:Date, 
            default: Date.now
        }
    }
)

//definir el export
const Cliente = moongose.model("cliente",esquemaCliente)
module.exports = Cliente;
