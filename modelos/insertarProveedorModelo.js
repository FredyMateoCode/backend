const db = require('../configuracion/conexion'); // Conexión a la base de datos

const insertarProveedor = async (proveedor) => {
    const { nombre, ruc, celular, direccion } = proveedor;
    console.log('Valores Recibidos:', proveedor);
    const query = `
        INSERT INTO proveedores (nombre_prov, ruc_prov, celular_prov, direccion_prov) 
        VALUES (?, ?, ?, ?)
    `;
    const valores = [nombre, ruc, celular, direccion];

    try {
        const result = await db.query(query, valores); // Ejecuta la consulta
        console.log('Resultado de la inserción:', result); // Imprime el resultado completo
        return result.insertId; // Suponiendo que `insertId` es una propiedad del objeto `result`
    } catch (error) {
        console.error('Error en el modelo al insertar cliente:', error);
        throw error; // Manejo de errores
    }
};

module.exports = insertarProveedor;
