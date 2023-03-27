const mongoose = require('mongoose')
const productsSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    categoria:{
        type: String,
        required:true
    },
    ubicacion:{
        type: String,
        required:true
    },
    precio:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('Products', productsSchema)