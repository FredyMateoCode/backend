//IMPORTACIÓN DE LIBRERÍAS:
const express = require('express');//Importamos el framework express para el manejo de rutas y crear el servidor.
const app = express(); //Instancia para crear el servidor y el manejo de rutas.

const cors = require('cors');//Para manejar solicitudes de diferentes dominios, como mecanismo de seguridad.
const corsOptions = {
    //origin: 'https://frontend-1szo.onrender.com',  // URL de tu frontend en Render
    origin: '*',  // URL de tu frontend en Render
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

const bodyParser = require('body-parser');//Para analizar los cuerpos HTTP en formato JSON - POST.

//IMPORTACIÓN DE RUTAS Y OTROS
const mostrarUsuariosRuta = require('./rutas/mostrarUsuariosRuta');
const mostrarClientesRuta = require('./rutas/mostrarClientesRuta');
const mostrarProveedoresRuta = require('./rutas/mostrarProveedoresRuta');
const autenticarUsuarioRuta = require('./rutas/autenticarUsuarioRuta');
const actualizarUsuarioRuta = require('./rutas/actualizarUsuarioRuta');
const eliminarUsuarioRuta = require('./rutas/eliminarUsuarioRuta');
const insertarUsuarioRuta = require('./rutas/insertarUsuarioRuta');
const verificarToken = require('./middlewares/verificarToken');
const obtenerClientePorIdruta = require('./rutas/obtenerClientePorIdRuta');
const actualizarClienteRoutes = require('./rutas/actualizarCliente'); // Cambié el nombre de la ruta
const obtenerProveedorPorIdruta = require('./rutas/obtenerProveedorPorIdRuta'); // Cambié el nombre de la ruta
const actualizarProveedorRuta = require('./rutas/actualizarProveedorRuta'); // Importa la ruta y asignar valor.
const eliminarClienteRuta = require('./rutas/eliminarClienteRuta'); // Ajusta el path según tu estructura
const eliminarProveedorRuta = require('./rutas/eliminarProveedorRuta'); // Ajusta el path según tu estructura
const insertarClienteRuta = require('./rutas/insertarClienteRuta');
const insertaProveedorRuta = require('./rutas/insertarProveedorRuta');

//CONFIGURACIONES GENERALES:
app.use(cors());//Configuración vulnerable->Revisar mas adelante.
//app.use(cors(corsOptions)); 

// Permite que el backend reciba datos en formato JSON
app.use(express.json());

//Cargamos las variables de entorno:
require('dotenv').config();


//___________CÓDIGO EN PRUEBA__________________________>>>>>>>

const createError = require('http-errors');

app.use((req, res, next) => {
    next(createError(404));
});

// Manejador de errores
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

//middleware temporal

app.use((req, res, next) => {
    console.log(`Recibiendo solicitud en: ${req.method} ${req.url}`);
    next();
  });
  



//Ruta temporal de pruba
app.get('/test', (req, res) => {
    res.json({ mensaje: "Backend accesible desde Render" });
});







//___________CÓDIGO EN PRUEBA__________________________<<<<<<<


//RUTAS:
//Ruta para la autenticaión de usuarios:
app.use('/autenticarUsuarios', autenticarUsuarioRuta);

//Ruta para mostrar Usuarios:
app.use('/mostrarUsuarios', mostrarUsuariosRuta);

//Ruta para mostrar Clientes:
app.use('/mostrarClientes', mostrarClientesRuta);

//Ruta para mostrar Clientes:
app.use('/mostrarProveedores', mostrarProveedoresRuta);

//Ruta para insertar usuario:
app.use('/api', insertarUsuarioRuta);

//Ruta para actualizar Usuario (Registrar la ruta para mostrar y actualizar usuarios)
app.use('/api', actualizarUsuarioRuta);

//Ruta para eliminar usuario
app.use('/api', eliminarUsuarioRuta);

//Ruta para obtener registro con promesa de id en el modelo y pasar al front end en formato JSON
app.use('/api', obtenerClientePorIdruta); // Prefijo para las rutas relacionadas con clientes

//Ruta para actualizar cliente.
app.use('/clientes', actualizarClienteRoutes);

//Ruta para obtener proveedor a partir de id_prov con promesa.
app.use('/api', obtenerProveedorPorIdruta);

//Ruta para actualizar Proveedor.
app.use('/proveedores', actualizarProveedorRuta); // Configura la ruta base

// Agregar la ruta de insertar CLIENTE
app.use('/api', insertarClienteRuta);

// Agregar la ruta de insertar PROVEEDOR
app.use('/api', insertaProveedorRuta);

//Ruta para eliminar cliente
app.use('/api', eliminarClienteRuta); // Sirve la ruta bajo el prefijo /api

//Ruta para eliminar proveedor
app.use('/api', eliminarProveedorRuta); // Sirve la ruta bajo el prefijo /api

//Iniciamos el servidor en el puerto específico:
const PORT = process.env.PORT || 4000;  // Usa el puerto de Render o 4000 si no está definido
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);

    console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // Verifica el entorno
});

