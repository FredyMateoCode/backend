const express = require('express');
const router = express.Router();
const { actualizarProveedor } = require('../controladores/actualizarProveedorControlador'); // Importa el controlador

// Ruta para actualizar un proveedor
router.put('/actualizar', actualizarProveedor);

module.exports = router;
