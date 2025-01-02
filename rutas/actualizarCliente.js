// rutas/actualizarCliente.js
const express = require('express');
const router = express.Router();
const actualizarClienteController = require('../controladores/actualizarCliente'); // Cambié el nombre del controlador

// Ruta para recibir y actualizar los datos del cliente
router.put('/actualizar', actualizarClienteController.actualizarCliente);

module.exports = router;
