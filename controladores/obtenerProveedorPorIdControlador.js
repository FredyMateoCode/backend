const { obtenerProveedorPorIdModelo } = require('../modelos/obtenerProveedorPorIdModelo');

// Controlador para obtener datos del proveedor a partir de su ID
const obtenerProveedorPorId = (req, res) => {

    console.log('Modelo:', obtenerProveedorPorIdModelo); // Verifica si el modelo se importó correctamente
    
    const { id_prov } = req.params; // Captura el parámetro de la URL

    obtenerProveedorPorIdModelo(id_prov, (error, resultados) => {
        if (error) {
            console.error('Error al obtener el proveedor:', error);
            return res.status(500).json({ mensaje: 'Error en el servidor' });
        }

        if (resultados.length === 0) {
            return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
        }

        res.json(resultados[0]); // Devuelve el primer resultado
    });
};

module.exports = {
    obtenerProveedorPorId,
};



