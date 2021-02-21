const express = require('express')
const router = express.Router()

const Libro = require('../model/libro')

//consultar
router.get('/',async(req, res) => {
    const libro = await Libro.find()
    res.send(libro)
})

//guardar
router.post('/', async(req,res) => {
    const libro = new Libro(
        {
            nombre : req.body.nombre,
            caratula: req.body.caratula,
            descripcion : req.body.descripcion,
            valorunitario: req.body.valorunitario,
            categoria: req.body.categoria
        }
    )
    const result = await libro.save()
    res.status(200).send(result)
})

//editar
router.put('/',async (req,res)=>{
    const libro = await Libro.findByIdAndUpdate(  
      req.body._id,  
      {  
        nombre : req.body.nombre,
        caratula: req.body.caratula,
        descripcion : req.body.descripcion,
        valorunitario: req.body.valorunitario,
        categoria: req.body.categoria 
      },  
      {  
        new: true  
      }  
    )  
    if(!libro){  
      res.status(400).send("No existe el libro en la db")  
    }  
    res.status(200).send(libro)  
  })
  
//borrar
  router.delete("/:_id", async (req,res)=>{  
    const libro = await Libro.findByIdAndDelete(req.params._id);  
    if(!libro){  
      res.status(400).send("No existe el libro en la db")  
    }  
    res.status(200).send("libro eliminado")  
  })

module.exports = router