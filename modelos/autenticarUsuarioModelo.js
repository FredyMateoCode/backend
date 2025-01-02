const conexion = require('../configuracion/conexion'); // Importamos la conexión correctamente

/**
 * Busca un usuario por su username.
 * @param {string} username - El nombre de usuario.
 * @returns {Promise<Object>} - Los datos del usuario, incluyendo la contraseña encriptada.
 */
const autenticarUsuario = async (username) => {
    const consulta = `
        SELECT u.id_usuario, u.usuario, u.nombre_usuario, u.apellido_usuario, u.contrasenia, r.nombre_rol AS rol
        FROM usuarios u
        JOIN roles r ON u.id_rol = r.id_rol
        WHERE u.usuario = ?
    `;

    return new Promise((resolve, reject) => {
        conexion.query(consulta, [username], (err, results) => {
            if (err) {
                reject(err); // Si hay un error, lo rechazamos
            }
            if (results.length === 0) {
                resolve(null); // Si no hay resultados, devolvemos null
            } else {
                resolve(results[0]); // Devolvemos el primer resultado
            }
        });
    });
};

module.exports = autenticarUsuario;
