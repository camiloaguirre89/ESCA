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
    const { tipoCliente, tipoId, numeroDocumento, nombreCliente, apellidoCliente, telefonoCliente,  telefonoFijoCliente, direccionCliente, ciudad, correoElectronicoCliente, fechaFormateada, genero, dondeConocio, notaCliente } = req.body;
     console.log(req.body);
    // Consulta SQL de inserción
    const query = 'INSERT INTO cliente (tipoCliente, tipoId, numeroDocumento, nombreCliente, apellidoCliente, telefonoCliente,  telefonoFijoCliente, direccionCliente, ciudad, correoElectronicoCliente, fechaNacimientoCliente, genero, dondeConocio, notaCliente) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // Ejecutar la consulta SQL con los datos proporcionados
    req.connection.query(query, [tipoCliente, tipoId, numeroDocumento, nombreCliente, apellidoCliente, telefonoCliente,  telefonoFijoCliente, direccionCliente, ciudad, correoElectronicoCliente, fechaFormateada, genero, dondeConocio, notaCliente], (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al crear cliente:', err);
            res.status(500).send('Error al crear cliente');
            return;
        }

        // Enviar una respuesta indicando que el cliente ha sido creado
        res.send('Cliente creado');
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
    const query = 'SELECT id, numeroDocumento, nombreCliente, apellidoCliente, telefonoCliente, correoElectronicoCliente FROM cliente';

    // Ejecutar la consulta SQL con el ID del cliente
    req.connection.query(query, (err, result) => {
        if (err) {
            // Manejar errores en la consulta SQL
            console.error('Error al buscar clientes:', err);
            res.status(500).send('Error al buscar clientes');
            return;
        }

        // Enviar los datos del cliente como respuesta
        res.json(result);
    });
});

// Exportar el módulo router
module.exports = router;
