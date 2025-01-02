const express = require('express');
const insertarProveedorControlador = require('../controladores/insertarProveedorControlador');

const router = express.Router();

router.post('/insertar_proveedor', insertarProveedorControlador);

module.exports = router;
