const conexion = require('../configuracion/conexion');

const eliminarUsuario = (id_usuario) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM usuarios WHERE id_usuario = ?';
        conexion.query(query, [id_usuario], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {
    eliminarUsuario,
};



