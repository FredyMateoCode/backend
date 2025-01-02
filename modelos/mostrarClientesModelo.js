// En modelos/mostrarClientesModelo.js
const conexion = require('../configuracion/conexion.js');

const obtenerClientes = (callback) => {
    const consulta = 'SELECT id_clie, nombres_clie, apellidos_clie, dni_clie, celular_clie, direccion_clie FROM clientes';
    conexion.query(consulta, (err, resultados) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, resultados);
    });
};

module.exports = { obtenerClientes };