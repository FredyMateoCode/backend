// En modelos/mostrarProveedoresModelo.js
const conexion = require('../configuracion/conexion.js');

const obtenerProveedores = (callback) => {
    const consulta = 'SELECT id_prov, nombre_prov, ruc_prov, celular_prov, direccion_prov FROM proveedores';
    conexion.query(consulta, (err, resultados) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, resultados);
    });
};

module.exports = { obtenerProveedores };