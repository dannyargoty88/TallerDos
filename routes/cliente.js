const express = require('express')
const router = express.Router()

const Cliente = require('../model/cliente')

//consultar
router.get('/',async(req, res) => {
    const cliente = await Cliente.find()
    res.send(cliente)
})

//guardar
router.post('/', async(req,res) => {
    const cliente = new Cliente(
        {
            nombre : req.body.nombre,
            direccion: req.body.direccion,
            celular : req.body.celular,
            correo: req.body.correo,
            contrasena: req.body.contrasena
        }
    )
    const result = await cliente.save()
    res.status(200).send(result)
})

//editar
router.put('/',async (req,res)=>{
    const cliente = await Cliente.findByIdAndUpdate(  
      req.body._id,  
      {  
        nombre : req.body.nombre,
        direccion: req.body.direccion,
        celular : req.body.celular,
        correo: req.body.correo,
        contrasena: req.body.contrasena  
      },  
      {  
        new: true  
      }  
    )  
    if(!cliente){  
      res.status(400).send("No existe el cliente en la db")  
    }  
    res.status(200).send(cliente)  
  })
  
//borrar
  router.delete("/:_id", async (req,res)=>{  
    const cliente = await Cliente.findByIdAndDelete(req.params._id);  
    if(!cliente){  
      res.status(400).send("No existe el cliente en la db")  
    }  
    res.status(200).send("Cliente eliminado")  
  })

module.exports = router