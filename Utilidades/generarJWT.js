const jwt = require('jsonwebtoken');

/**
 * Genera un token JWT
 * @param {number} id - ID del usuario
 * @param {string} rol - Rol del usuario (por ejemplo: "admin", "usuario")
 * @param {string} nombre_usuario - Nombre del usuario
 * @returns {string} - Token JWT
 */
const generarJWT = (id, rol, nombre_usuario) => {
    const payload = { id, rol, nombre_usuario };

    // Firmar el token con una clave secreta
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token válido por 1 hora
    });
};

module.exports = generarJWT;
