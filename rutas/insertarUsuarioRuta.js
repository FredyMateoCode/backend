const express = require('express');
const insertarUsuarioControlador = require('../controladores/insertarUsuarioControlador');

const router = express.Router();

/**
 * Ruta para insertar un nuevo usuario.
 * POST /insertarUsuario
 */
router.post('/insertarUsuario', insertarUsuarioControlador);

module.exports = router;
