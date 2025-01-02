// src/controladores/actualizarClienteControlador.js
const { obtenerClientePorIdModelo } = require('../modelos/obtenerClientePorIdModelo');

// Controlador para obtener cliente por ID
const obtenerClientePorId = (req, res) => {
    const { id_clie } = req.params; // Captura el parámetro de la URL

    obtenerClientePorIdModelo(id_clie, (error, resultados) => {
        if (error) {
            console.error('Error al obtener el cliente:', error);
            return res.status(500).json({ mensaje: 'Error en el servidor' });
        }

        if (resultados.length === 0) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.json(resultados[0]); // Devuelve el primer resultado
    });
};

module.exports = {
    obtenerClientePorId,
};


