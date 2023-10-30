const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()


//uris del proyecto
router.get('/', async (req, res)=>{
    // Se traen todos los bootcamps 
    const bootcamps = await bootcampModel.find()
    res.json({
        success:true,
        data: bootcamps
    })
})

router.get('/:id', async(req, res)=>{
    // Traer un bootcamp por id
    const bootcamp = await bootcampModel.findById(req.params.id)
    res.json({
        success:true,
        data: bootcamp
    })
})

router.post('/', async (req, res)=>{

    // Registrar nuevo bootcamp
    const newBootcamp = await bootcampModel.create(req.body)

    res.json({
        success:true,
        data : newBootcamp
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editara el bootcamp: ${req.params.id}`
    })
})

router.delete('/:id', async(req, res)=>{
    // Eliminar un bootcamp por id
    const bootcamps = await bootcampModel.findByIdAndDelete(req.params.id)
    res.json({
        success:true,
        data: bootcamps
    })
})

module.exports = router