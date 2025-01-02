const express = require('express');
const insertarClienteControlador = require('../controladores/insertarClienteControlador');

const router = express.Router();

router.post('/insertar', insertarClienteControlador);

module.exports = router;
