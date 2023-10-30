const mongoose = require('mongoose')
const bootcampModel = require('../models/bootcampModel')
//definir un modelo 
// solo mongo

const bootcampSchema = new mongoose.Schema({

    name:{
        type: String,
        required : [true, "El nombre es requerido"],
        unique: true,
        maxlength: [50, "telefono de bootcamp no mayor a 10 caracteres"]
    },
    phone:{
        type: Number,
        maxlength: [10, "telefono de bootcamp no mayor a 10 caracteres"]
    },
    address:{
        type: String,
        required : [true, "la direccion es requerida"],
        maxlength: [10, "direccion de bootcamp no mayor a 10 caracteres"]
    },
    topics: {
        type: [String],
        required: [true,"temas requeridos"],
        enum: ["frontend", "backend", "ai", "devops"]
    },
    averageRaring: Number,
    createdAt:{
        type: Date,
        required: [true, "debe ingresar fecha de creacion"]

        } 
    }) 

   const bootcamp =  mongoose.model('Bootcamp', bootcampSchema)
   module.exports = bootcamp