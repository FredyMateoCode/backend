const insertarUsuarioModelo = require('../modelos/insertarUsuarioModelo');

/**
 * Controlador para insertar un nuevo usuario.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
const insertarUsuarioControlador = (req, res) => {
    const usuario = req.body;

    if (!usuario.usuario_nom || !usuario.nombre_usuario || !usuario.apellido_usuario || !usuario.contrasenia || !usuario.id_rol) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    insertarUsuarioModelo(usuario, (error, resultados) => {
        if (error) {
            console.error('Error al insertar usuario:', error);
            return res.status(500).json({ mensaje: 'Error al insertar usuario' });
        }
        res.status(201).json({ mensaje: 'Usuario insertado correctamente Backend', id: resultados.insertId });
    });
};

module.exports = insertarUsuarioControlador;
