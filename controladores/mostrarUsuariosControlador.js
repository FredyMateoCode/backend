const { obtenerUsuarios } = require('../modelos/mostrarUsuariosModelo.js'); //Importamos la Función del modelo.

/* Definimos el controlador de express: En controladores/mostrarUsuariosControlador.js
Para obtener los datos de la base de datos y enviarlos al frontend en formato Json.
->Los controladores manejan las solicitudes GET, POST y otros:
req = requerimiento HTTP del frontend.
res = respuesta HTTP que el servidor enviará al frontend.
err = maneja los errores.
return = se utiliza para evitar que el código siga ejecutandose.*/

const mostrarUsuarios = (req, res) => {
    obtenerUsuarios((err, resultados) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
        //Si en caso no hay error, renderizamos los resultados en formato json, para mostrar en el frontend.
        res.json(resultados);//Resultados, con los datos de la base de daton en formato JSon.
        console.log('Datos Obtenidos', resultados);//Esta linea solamente se utiliza para depuración de errores.
    });
};

module.exports = { mostrarUsuarios };// Exportamos el controlador para que pueda ser utilizados en el proyecto.
