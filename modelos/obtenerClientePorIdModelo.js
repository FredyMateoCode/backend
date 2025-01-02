// src/modelos/actualizarClienteModelo.js
const conexion = require('../configuracion/conexion'); // Importa la conexión a la base de datos

// Función para obtener cliente por ID
const obtenerClientePorIdModelo = (id_clie, callback) => {
    const consulta = 'SELECT * FROM clientes WHERE id_clie = ?'; //Se hace una promesa de envio de datos.
    conexion.query(consulta, [id_clie], callback); // La función de callback maneja el resultado o error
};

module.exports = {
    obtenerClientePorIdModelo,
};

