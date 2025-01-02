const insertarProveedor = require('../modelos/insertarProveedorModelo');

const insertarProveedorControlador = async (req, res) => {
    console.log('Datos recibidos en el controlador:', req.body);
    try {
        const proveedor = req.body;
        const insertId = await insertarProveedor(proveedor); // Llama al modelo para insertar
        res.status(201).json({ id: insertId }); // Devuelve el ID insertado como respuesta
    } catch (error) {
        console.error('Error al insertar cliente en el controlador:', error);
        res.status(500).json({ error: 'Error al insertar cliente' });
    }
};


module.exports = insertarProveedorControlador;
