const mysql = require('mysql');
require('dotenv').config(); // Cargar las variables de entorno

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,     // Usar la variable de entorno DB_HOST
    user: process.env.DB_USER,     // Usar la variable de entorno DB_USER
    password: process.env.DB_PASSWORD, // Usar la variable de entorno DB_PASSWORD
    database: process.env.DB_NAME  // Usar la variable de entorno DB_NAME
});

conexion.connect((error) => {
    if (error) {
        console.error('Error de conexión a MySQL:', error);
    } else {
        console.log('Conexión exitosa a la Base de Datos Motos');
    }
});

module.exports = conexion;
