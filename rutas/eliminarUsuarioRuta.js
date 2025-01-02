// eliminarUsuarioRuta.js
const express = require('express');
const router = express.Router();
const eliminarUsuarioControlador = require('../controladores/eliminarUsuarioControlador');

// Ruta para eliminar un usuario
router.delete('/eliminarUsuario/:id_usuario', eliminarUsuarioControlador.eliminarUsuario);

module.exports = router;
