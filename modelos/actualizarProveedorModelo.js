const conexion = require('../configuracion/conexion'); // Importa la conexión a la base de datos

// Función para actualizar los datos de un proveedor
const actualizarProveedorModelo = (datosProveedor, callback) => {
    const { nombre_prov, ruc_prov, celular_prov, direccion_prov, id_prov } = datosProveedor;

    // Consulta SQL para actualizar los datos
    const consulta = `
        UPDATE proveedores 
        SET nombre_prov = ?, ruc_prov = ?, celular_prov = ?, direccion_prov = ? 
        WHERE id_prov = ?
    `;

    // Ejecuta la consulta con los parámetros
    conexion.query(consulta, [nombre_prov, ruc_prov, celular_prov, direccion_prov, id_prov], callback);
};

module.exports = { actualizarProveedorModelo };
