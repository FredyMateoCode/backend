// controladores/actualizarCliente.js
const conexion = require('../configuracion/conexion'); // Asegúrate de tener la configuración correcta

// Controlador para actualizar los datos de un cliente
// controlador/actualizarCliente.js
exports.actualizarCliente = (req, res) => {
    const { nombres_clie, apellidos_clie, dni_clie, celular_clie, direccion_clie, id_clie } = req.body;

    // Verifica que los datos estén presentes
    if (!id_clie) {
        return res.status(400).json({ error: "Falta el id_clie" });
    }

    const consulta = "UPDATE clientes SET nombres_clie = ?, apellidos_clie = ?, dni_clie = ?, celular_clie = ?, direccion_clie = ? WHERE id_clie = ?";
    conexion.query(consulta, [nombres_clie, apellidos_clie, dni_clie, celular_clie, direccion_clie, id_clie], (err, resultados) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error al actualizar los datos');
        }
        res.status(200).send('Backend dice: Datos actualizados correctamente');
    });
};


