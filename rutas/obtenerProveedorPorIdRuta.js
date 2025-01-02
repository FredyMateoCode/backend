const express = require('express');
const router = express.Router();
const controladorProveedor = require('../controladores/obtenerProveedorPorIdControlador');

// Ruta para obtener un cliente por ID
router.get('/proveedores/:id_prov', controladorProveedor.obtenerProveedorPorId);

module.exports = router;
