// backend/modelo/eliminarClienteModelo.js
const pool = require('../configuracion/conexion'); // Asumimos que 'conexion.js' maneja la conexión con la base de datos

const eliminarCliente = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM clientes WHERE id_clie = ?';
        pool.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = eliminarCliente;

