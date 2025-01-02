const conexion = require('../configuracion/conexion');


//Funcion para realizar la consulta y otbtener Proveedor por ID;
const obtenerProveedorPorIdModelo = (id_prov, callback) => {
	const consulta = 'SELECT * FROM proveedores WHERE id_prov = ?';// Con promesa de envio de datos.
	conexion.query(consulta, [id_prov], callback);//La funcion callback maneja el resultado o el error.
};

module.exports = { 
	obtenerProveedorPorIdModelo,
};






