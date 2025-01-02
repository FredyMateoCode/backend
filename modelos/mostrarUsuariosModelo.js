// En modelos/mostrarUsuariosModelo.js
//Importamos la conexión configuradad anteriormente:
const conexion = require('../configuracion/conexion.js');

/*Declaramos la función obtenerUsuarios con su método callback(argumentos->err o res),
para obtener todos los usuarios de la db.*/
const obtenerUsuarios = (callback) => {
    //Creamos la consulta como una constante de nombre consulta(por que se realiza una consulta):
    const consulta = 'SELECT id_usuario, usuario, nombre_usuario, apellido_usuario, id_rol FROM usuarios';
    //Ejecutamos la consulta y Hacemos un callback:
    //El callback tiene dos parámetros, uno para manejar los errores y otro para los resultados.
    //conexion.query es un método del mysql para realizar consultas en una base de datos:
    //Consulta es un parámetro del método que en este caso contiene todo la consulta.
    conexion.query(consulta, (err, resultados) => {
        if (err) {
            //Si hay un error lo devuelve en el primer argumento y el segundo lo devuelve como nulo.
            return callback(err, null);
        }
        //Si no hay un error, devuelve el primer argumento como nulo y el segundo muestra los resultados.
        callback(null, resultados);
    });
};

//Exportamos la función para que pueda ser utilizada en otras partes del proyecto:
module.exports = { obtenerUsuarios };
