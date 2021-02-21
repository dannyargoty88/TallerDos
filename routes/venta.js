const express = require('express')
const router = express.Router()

const Venta = require('../model/venta')

//consultar
router.get('/',async(req, res) => {
    const venta = await Venta.find()
    res.send(venta)
})


//guardar
router.post('/', async(req,res) => {
    const venta = new Venta(
        {
            total : req.body.total,
            cliente: req.body.cliente,
            detalle : req.body.detalle
        }
    )
    const result = await venta.save()
    res.status(200).send(result)
})

//editar
router.put('/',async (req,res)=>{
    const venta = await Venta.findByIdAndUpdate(  
      req.body._id,  
      {  
        total : req.body.total,
        cliente: req.body.cliente,
        detalle : req.body.detalle
      },  
      {  
        new: true  
      }  
    )  
    if(!venta){  
      res.status(400).send("No existe la venta en la db")  
    }  
    res.status(200).send(venta)  
  })
  
//borrar
  router.delete("/:_id", async (req,res)=>{  
    const venta = await Venta.findByIdAndDelete(req.params._id);  
    if(!venta){  
      res.status(400).send("No existe la venta en la db")  
    }  
    res.status(200).send("venta eliminada")  
  })

module.exports = router