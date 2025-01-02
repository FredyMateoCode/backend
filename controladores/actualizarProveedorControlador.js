const { actualizarProveedorModelo } = require('../modelos/actualizarProveedorModelo'); // Importa el modelo

// Controlador para actualizar los datos de un proveedor
exports.actualizarProveedor = (req, res) => {
    const { nombre_prov, ruc_prov, celular_prov, direccion_prov, id_prov } = req.body;

    // Verifica que todos los datos estén presentes
    if (!id_prov || !nombre_prov || !ruc_prov || !celular_prov || !direccion_prov) {
        return res.status(400).json({ error: "Todos los campos son obligatorios, incluido el ID del proveedor" });
    }

    // Llama al modelo para actualizar los datos
    actualizarProveedorModelo(
        { nombre_prov, ruc_prov, celular_prov, direccion_prov, id_prov },
        (err, resultados) => {
            if (err) {
                console.error('Error en la consulta:', err);
                return res.status(500).json({ error: 'Error al actualizar los datos del proveedor' });
            }

            // Verifica si la actualización fue exitosa
            if (resultados.affectedRows === 0) {
                return res.status(404).json({ mensaje: 'Proveedor no encontrado o sin cambios' });
            }

            res.status(200).json({ mensaje: 'Proveedor actualizado correctamente' });
        }
    );
};

