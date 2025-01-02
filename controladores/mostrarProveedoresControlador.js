// En controladores/mostrarProveedoresControlador.js
const { obtenerProveedores } = require('../modelos/mostrarProveedoresModelo.js');

const mostrarProveedores = (req, res) => {
    obtenerProveedores((err, resultados) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los Proveedores' });
        }
        //Renderizamos los resultados en formato json, para mostrar en el frontend.
        res.json(resultados);
        console.log('Datos de Clientes Obtenidos', resultados);
    });
};

module.exports = { mostrarProveedores };


