const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado. No se proporcionó un token' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = payload; // Guardamos la información del token en la solicitud
        next();
    } catch (error) {
        return res.status(403).json({ mensaje: 'Token inválido o expirado' });
    }
};

module.exports = verificarToken;
