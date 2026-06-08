const express = require('express')
const Router = express.Router()
const ctrl = require('../controllers/productoscontroller')

Router.get('/', ctrl.obtenerTodos)  //get /productos
Router.post('/', ctrl.crearProducto) //post /productos

module.exports = Router