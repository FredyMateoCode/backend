// rutas/autenticarUsuarioRuta.js
const express = require('express');
const router = express.Router();
const autenticarUsuarioControlador = require('../controladores/autenticarUsuarioControlador');  // Importamos el controlador

// Ruta para la autenticación
router.post('/login', autenticarUsuarioControlador);  // Llamamos al controlador para manejar el login

module.exports = router;  // Exportamos la ruta


