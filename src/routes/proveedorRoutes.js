// Importar Express y crear una instancia de router
const express = require('express');
const router = express.Router();


router.post('/crear', (req, res) => {
    // Destructurar los datos del cuerpo de la solicitud
    const { nitProveedor, tipoProveedor, razonSocial, representanteLegal, idRepresentanteLegal, telefono,  direccion, ciudad, correoElectronico, estado, fechaFormateada, notaProveedor } = req.body;

    // Consulta SQL de inserción
    const query = 'INSERT INTO proveedor (nitProveedor, tipoProveedor, razonSocial, representanteLegal, idRepresentanteLegal, telefono,  direccion, ciudad, correoElectronico, estado, fechaIngresoProveedor, notaProveedor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // Ejecutar la consulta SQL con los datos proporcionados
    req.connection.query(query, [nitProveedor, tipoProveedor, razonSocial, representanteLegal, idRepresentanteLegal, telefono,  direccion, ciudad, correoElectronico, estado, fechaFormateada, notaProveedor], (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al crear proveedor:', err);
            res.status(500).send('Error al crear proveedor');
            return;
        }

        // Enviar una respuesta indicando que el cliente ha sido creado
        res.send('proveedor creado');
    });
});


/*
  Ruta: GET /buscar
  Descripción: Buscar un cliente por su ID en la base de datos
  Parámetros:
    - idCliente: número único que identifica al cliente
*/
router.get('/buscar', (req, res) => {
    // Obtener el ID del cliente desde los parámetros de la solicitud

    // Consulta SQL de búsqueda
    const query = 'SELECT id, nitProveedor, razonSocial, telefono, correoElectronico, fechaIngresoProveedor FROM proveedor';

    // Ejecutar la consulta SQL con el ID del cliente
    req.connection.query(query, (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al buscar proveedor:', err);
            res.status(500).send('Error al buscar proveedor');
            return;
        }

        // Enviar los datos del cliente como respuesta
        res.json(result);
    });
});


// Exportar el módulo router
module.exports = router;
