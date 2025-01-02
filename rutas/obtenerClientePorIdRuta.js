const express = require('express');
const router = express.Router();
const controladorClientes = require('../controladores/obtenerClientePorIdControlador');

// Ruta para obtener un cliente por ID
router.get('/clientes/:id_clie', controladorClientes.obtenerClientePorId);

module.exports = router;
