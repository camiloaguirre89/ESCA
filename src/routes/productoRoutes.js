// Importar Express y crear una instancia de router
const express = require('express');
const router = express.Router();

/*
  Ruta: POST /crear
  Descripción: Crear un nuevo cliente en la base de datos
  Parámetros:
    - idCliente: número único que identifica al cliente
    - nombre: nombre del cliente
    - genero: género del cliente (opcional)
    - telefono: número de teléfono del cliente (opcional)
    - direccion: dirección del cliente (opcional)
*/
router.post('/crear', (req, res) => {
    // Destructurar los datos del cuerpo de la solicitud
    const { codigoBarras, nombreProducto, marcaProducto, referenciaProducto, valorIngreso, valorIVA,  valorVenta, estadoIngresoProducto, fechaFormateada, cantidadProducto, descripcionProdcuto } = req.body;

    // Consulta SQL de inserción
    const query = 'INSERT INTO producto (codigoBarras, nombreProducto, marcaProducto, referenciaProducto, valorIngreso, valorIVA,  valorVenta, estadoIngresoProducto, fechaIngreso, cantidadProducto, descripcionProdcuto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // Ejecutar la consulta SQL con los datos proporcionados
    req.connection.query(query, [codigoBarras, nombreProducto, marcaProducto, referenciaProducto, valorIngreso, valorIVA,  valorVenta, estadoIngresoProducto, fechaFormateada, cantidadProducto, descripcionProdcuto], (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al crear producto:', err);
            res.status(500).send('Error al crear producto');
            return;
        }

        // Enviar una respuesta indicando que el cliente ha sido creado
        res.send('Producto creado');
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
    const query = 'SELECT id, codigoBarras, nombreProducto, marcaProducto, valorVenta, cantidadProducto FROM producto';

    // Ejecutar la consulta SQL con el ID del cliente
    req.connection.query(query, (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al buscar productos:', err);
            res.status(500).send('Error al buscar productos');
            return;
        }

        // Enviar los datos del cliente como respuesta
        res.json(result);
    });
});


// Exportar el módulo router
module.exports = router;
