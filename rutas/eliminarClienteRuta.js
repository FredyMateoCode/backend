// backend/rutas/eliminarClienteRuta.js
const express = require('express');
const eliminarClienteControlador = require('../controladores/eliminarClienteControlador');

const router = express.Router();

router.delete('/eliminarCliente/:id', eliminarClienteControlador); // Definimos la ruta DELETE

module.exports = router;
