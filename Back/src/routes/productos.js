const express = require("express")
const productos = require("../models/productos")
const productsSchema = require('../models/productos')
const router = express.Router()


router.get('/productos', (req, res) => {
    productsSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

router.get('/productos/:id', (req, res) => {
    const { id } = req.params
    productsSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.post('/productos', (req, res) => {
    const productos = productsSchema(req.body)
    productos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

router.delete('/productos/:id', (req, res) => {
    const { id } = req.params
    productsSchema
        .deleteOne({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.put('/productos/:id', (req, res) => {
    const { id } = req.params
    const { nombre, categoria, ubicacion, precio } = req.body
    productsSchema
        .updateOne({ _id: id }, {$set: { nombre, categoria, ubicacion, precio }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router


