// modelos/editarUsuarioModelo.js
const db = require('../configuracion/conexion');

// Función para obtener los datos de un usuario por ID
const obtenerUsuarioPorId = (id, callback) => {
    const query = 'SELECT * FROM usuarios WHERE id_usuario = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]); // Devolvemos el primer resultado (usuario)
    });
};

// Función para actualizar los datos de un usuario
const actualizarUsuario = (id, datos, callback) => {
    const { usuario, nombre_usuario, apellido_usuario, contrasenia, id_rol } = datos;
    const query = 'UPDATE usuarios SET usuario=?, nombre_usuario = ?, apellido_usuario = ?, contrasenia = ?, id_rol = ? WHERE id_usuario = ?';
    db.query(query, [usuario, nombre_usuario, apellido_usuario, contrasenia, id_rol, id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results); // Devuelve el resultado de la actualización
    });
};

module.exports = { obtenerUsuarioPorId, actualizarUsuario };
