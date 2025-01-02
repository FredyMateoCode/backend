const db = require('../configuracion/conexion'); // Conexión a la base de datos

const insertarCliente = async (cliente) => {
    const { nombres, apellidos, dni, celular, direccion } = cliente;
    console.log('Valores Recibidos:', cliente);
    const query = `
        INSERT INTO clientes (nombres_clie, apellidos_clie, dni_clie, celular_clie, direccion_clie) 
        VALUES (?, ?, ?, ?, ?)
    `;
    const valores = [nombres, apellidos, dni, celular, direccion];

    try {
        const result = await db.query(query, valores); // Ejecuta la consulta
        console.log('Resultado de la inserción:', result); // Imprime el resultado completo
        return result.insertId; // Suponiendo que `insertId` es una propiedad del objeto `result`
    } catch (error) {
        console.error('Error en el modelo al insertar cliente:', error);
        throw error; // Manejo de errores
    }
};

module.exports = insertarCliente;
