const actualizarUsuarioModelo = require('../modelos/actualizarUsuarioModelo'); // Modelo de actualizar usuario

// Función para obtener los datos del usuario por ID
const obtenerUsuarioParaEditar = (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario desde los parámetros de la URL

    actualizarUsuarioModelo.obtenerUsuarioPorId(id, (error, usuario) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener los datos del usuario' });
        }
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario); // Devolver los datos del usuario
    });
};

// Función para actualizar los datos del usuario
const actualizarUsuario = (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario desde los parámetros de la URL
    const usuarioActualizado = req.body; // Los datos que llegan en el cuerpo de la solicitud

    actualizarUsuarioModelo.actualizarUsuario(id, usuarioActualizado, (error, resultado) => {
        if (error) {
            return res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
        res.json({ message: 'Usuario actualizado correctamente', usuario: resultado });
    });
};

module.exports = { obtenerUsuarioParaEditar, actualizarUsuario };
