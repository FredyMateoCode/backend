// controladores/editarUsuarioControlador.js
const editarUsuarioModelo = require('../modelos/editarUsuarioModelo');

// Función para obtener los datos de un usuario por ID
const obtenerUsuarioParaEditar = (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario desde los parámetros de la URL

    editarUsuarioModelo.obtenerUsuarioPorId(id, (error, usuario) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener los datos del usuario' });
        }
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario); // Devolver los datos del usuario
    });
};

// Función para actualizar los datos de un usuario
const actualizarUsuario = (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario desde los parámetros de la URL
    const { usuario, nombre_usuario, apellido_usuario, contrasenia, id_rol } = req.body;

    editarUsuarioModelo.actualizarUsuario(id, { usuario, nombre_usuario, apellido_usuario, contrasenia, id_rol }, (error, result) => {
        if (error) {
            return res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ mensaje: 'Usuario actualizado correctamente' });
    });
};

module.exports = { obtenerUsuarioParaEditar, actualizarUsuario };
