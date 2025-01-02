// En controladores/mostrarClientesControlador.js
const { obtenerClientes } = require('../modelos/mostrarClientesModelo.js');

const mostrarClientes = (req, res) => {
    obtenerClientes((err, resultados) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los Clientes' });
        }
        //Renderizamos los resultados en formato json, para mostrar en el frontend.
        res.json(resultados);
        console.log('Datos de Clientes Obtenidos', res);
    });
};

module.exports = { mostrarClientes };
