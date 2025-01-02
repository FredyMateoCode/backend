// En rutas/mostrarClientesRuta.js
const express = require('express');
const { mostrarProveedores } = require('../controladores/mostrarProveedoresControlador');

const router = express.Router();
router.get('/proveedores', mostrarProveedores);

module.exports = router;
