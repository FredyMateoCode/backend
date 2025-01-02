//En rutas/mostrarUsuariosRuta.js
/*Creamos las rutas para hacer mas de nuestros proyectos mas manejables y escalables, esto es conocido como
modularización*/
//Importa Express para usar el sistema de rutas, y nos permitirá gestionar las rutas:
const express = require('express');

//Importamos el controlador.
const { mostrarUsuarios } = require('../controladores/mostrarUsuariosControlador');

//Creamos el objeto que gestionará las rutas (enrutador) con una funcionalidad específica:
const ruta = express.Router();

//Definimos una ruta adecuada según la funcionalidad en este caso ruta de tipo GET
//URL para acceder a la ruta '/usuarios2024'
// y mostrarUsuarios_es la función que se ejecutará al acceder a la ruta:
ruta.get('/usuarios2024', mostrarUsuarios);

//Exportamos la función para ser accesible desde otros archivos por ejemplo app.js
module.exports = ruta;

