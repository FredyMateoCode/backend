const bcrypt = require('bcryptjs'); // Importa bcrypt para encriptar la contraseña
const db = require('../configuracion/conexion'); // Conexión a la base de datos

// Función para obtener un usuario por su ID
const obtenerUsuarioPorId = (id, callback) => {
    const query = 'SELECT usuario, nombre_usuario, apellido_usuario, id_rol FROM usuarios WHERE id_usuario = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results[0]); // Devolver el primer resultado (usuario)
    });
};

// Función para actualizar los datos de un usuario
const actualizarUsuario = async (id, usuarioActualizado, callback) => {
    try {
        // Verifica si hay una contraseña proporcionada
        if (usuarioActualizado.contrasenia) {
            // Encripta la contraseña antes de actualizarla
            const salt = await bcrypt.genSalt(10);
            usuarioActualizado.contrasenia = await bcrypt.hash(usuarioActualizado.contrasenia, salt);
        }

        const query = 'UPDATE usuarios SET usuario=?, nombre_usuario=?, apellido_usuario=?, contrasenia=?, id_rol=? WHERE id_usuario=?';
        const valores = [
            usuarioActualizado.usuario,
            usuarioActualizado.nombre_usuario,
            usuarioActualizado.apellido_usuario,
            usuarioActualizado.contrasenia,
            usuarioActualizado.id_rol,
            id
        ];

        db.query(query, valores, (error, results) => {
            if (error) {
                return callback(error, null);
            }
            callback(null, { id_usuario: id, ...usuarioActualizado }); // Devolver el usuario actualizado
        });
    } catch (error) {
        callback(error, null); // Manejar errores durante el proceso de encriptación
    }
};

module.exports = { obtenerUsuarioPorId, actualizarUsuario };
