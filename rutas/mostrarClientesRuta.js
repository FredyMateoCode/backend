// En rutas/mostrarClientesRuta.js
const express = require('express');
const { mostrarClientes } = require('../controladores/mostrarClientesControlador');

const router = express.Router();
router.get('/clientes', mostrarClientes);


module.exports = router;
