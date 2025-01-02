const express = require('express');
const router = express.Router();
const actualizarUsuarioControlador = require('../controladores/actualizarUsuarioControlador'); // Controlador de actualizar usuario

// Ruta para obtener un usuario por ID (GET)
router.get('/mostrarUsuario/:id', actualizarUsuarioControlador.obtenerUsuarioParaEditar);

// Ruta para actualizar un usuario (PUT)
router.put('/actualizarUsuario/:id', actualizarUsuarioControlador.actualizarUsuario);

module.exports = router;
