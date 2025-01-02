// backend/modelo/eliminarClienteModelo.js
const conexion = require('../configuracion/conexion'); // Asumimos que 'conexion.js' maneja la conexión con la base de datos

const eliminarProveedor = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM proveedores WHERE id_prov = ?';
        conexion.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = eliminarProveedor;
