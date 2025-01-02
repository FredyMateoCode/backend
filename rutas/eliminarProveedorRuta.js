// backend/rutas/eliminarClienteRuta.js
const express = require('express');
const eliminarProveedorControlador = require('../controladores/eliminarProveedorControlador');

const router = express.Router();

router.delete('/eliminarProveedor/:id', eliminarProveedorControlador); // Definimos la ruta DELETE

module.exports = router;
