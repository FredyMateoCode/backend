// eliminarUsuarioControlador.js
const eliminarUsuarioModelo = require('../modelos/eliminarUsuarioModelo');

const eliminarUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    
    try {
        const result = await eliminarUsuarioModelo.eliminarUsuario(id_usuario);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error al eliminar usuario' });
    }
};

module.exports = {
    eliminarUsuario,
};

