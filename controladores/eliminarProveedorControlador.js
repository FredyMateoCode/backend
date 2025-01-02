// backend/controlador/eliminarClienteControlador.js
const eliminarProveedor = require('../modelos/eliminarProveedorModelo'); // Importamos el modelo

const eliminarProveedorControlador = async (req, res) => {
    const { id } = req.params;  // Extraemos el ID de los parámetros de la ruta

    try {
        const resultado = await eliminarProveedor(id);  // Llamamos al modelo que elimina el cliente
        if (resultado.affectedRows > 0) {  // Verificamos si la eliminación fue exitosa
            res.status(200).json({ mensaje: 'Proveedor eliminado con éxito' });  // Enviamos respuesta de éxito
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado' });  // Cliente no encontrado
        }
    } catch (error) {
        console.error('Error al eliminar el Proveedor:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });  // Error en el servidor
    }
};

module.exports = eliminarProveedorControlador;
