// backend/controlador/eliminarClienteControlador.js
const eliminarCliente = require('../modelos/eliminarClienteModelo'); // Importamos el modelo

const eliminarClienteControlador = async (req, res) => {
    const { id } = req.params;  // Extraemos el ID de los parámetros de la ruta

    try {
        const resultado = await eliminarCliente(id);  // Llamamos al modelo que elimina el cliente
        if (resultado.affectedRows > 0) {  // Verificamos si la eliminación fue exitosa
            res.status(200).json({ mensaje: 'Cliente eliminado con éxito' });  // Enviamos respuesta de éxito
        } else {
            res.status(404).json({ mensaje: 'Cliente no encontrado' });  // Cliente no encontrado
        }
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });  // Error en el servidor
    }
};

module.exports = eliminarClienteControlador;
