const bcrypt = require('bcryptjs');
const autenticarUsuario = require('../modelos/autenticarUsuarioModelo'); // Importamos el modelo
const generarJWT = require('../Utilidades/generarJWT'); // Importamos la función para generar tokens

// Función para autenticar al usuario
const autenticarUsuarioControlador = async (req, res) => {
    const { username, password } = req.body; // Recibimos los datos enviados desde el frontend

    try {
        // Llamamos al modelo para obtener el usuario por username
        const usuario = await autenticarUsuario(username);

        // Si no encontramos un usuario, respondemos con error
        if (!usuario) {
            return res.status(401).json({ mensaje: 'ACCESO DENEGADO. Usuario o contraseña incorrectos' });
        }

        // Verificar la contraseña con bcrypt
        const passwordMatch = await bcrypt.compare(password, usuario.contrasenia);

        if (!passwordMatch) {
            return res.status(401).json({ mensaje: 'ACCESO DENEGADO. Usuario o contraseña incorrectos' });
        }

        // Generar un token JWT usando el ID y el rol del usuario
        const token = generarJWT(usuario.id_usuario, usuario.rol, usuario.nombre_usuario);

        // Responder con el token y los datos del usuario
        return res.json({
            mensaje: 'Acceso concedido',
            token, // Incluimos el token en la respuesta
            usuario: {
                id_usuario: usuario.id_usuario,
                nombre_usuario: usuario.nombre_usuario,
                rol: usuario.rol
            }
        });

    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        return res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

module.exports = autenticarUsuarioControlador; // Exportamos el controlador
