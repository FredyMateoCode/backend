const insertarCliente = require('../modelos/insertarClienteModelo');

const insertarClienteControlador = async (req, res) => {
    console.log('Datos recibidos en el controlador:', req.body);
    try {
        const cliente = req.body;
        const insertId = await insertarCliente(cliente); // Llama al modelo para insertar
        res.status(201).json({ id: insertId }); // Devuelve el ID insertado como respuesta
    } catch (error) {
        console.error('Error al insertar cliente en el controlador:', error);
        res.status(500).json({ error: 'Error al insertar cliente' });
    }
};


module.exports = insertarClienteControlador;
