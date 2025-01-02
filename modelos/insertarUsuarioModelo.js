const bcrypt = require('bcryptjs');
const conexion = require('../configuracion/conexion');

/**
 * Inserta un nuevo usuario en la tabla `usuarios`.
 * @param {Object} usuario - Objeto con los datos del usuario.
 * @param {Function} callback - Callback para manejar el resultado.
 */
const insertarUsuarioModelo = async (usuario, callback) => {
    const { usuario_nom, nombre_usuario, apellido_usuario, contrasenia, id_rol } = usuario;

    try {
        // Cifrar la contraseña antes de insertarla
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contrasenia, salt);

        const query = `
            INSERT INTO usuarios (usuario, nombre_usuario, apellido_usuario, contrasenia, id_rol)
            VALUES (?, ?, ?, ?, ?)
        `;

        conexion.query(query, [usuario_nom, nombre_usuario, apellido_usuario, hashedPassword, id_rol], (error, resultados) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, resultados);
            }
        });
    } catch (error) {
        callback(error, null);
    }
};

module.exports = insertarUsuarioModelo;
