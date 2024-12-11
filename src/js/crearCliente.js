
function crearCliente() {
    // Llama a la función de validación y solo procede si el formulario es válido
        // Obtiene los valores de los campos del formulario
        let tipoCliente = document.getElementById('tipoPersona').value;
        let tipoId = document.getElementById('tipoID').value;
        let numeroDocumento = document.getElementById('numeroDocumento').value;
        let nombreCliente = document.getElementById('nombreCliente').value;
        let apellidoCliente = document.getElementById('apellidosCliente').value;
        let telefonoCliente = document.getElementById('telefono').value;
        let telefonoFijoCliente = document.getElementById('telefonoFijo').value;
        let direccionCliente = document.getElementById('direccionCliente').value;
        let ciudad = document.getElementById('ciudadCliente').value;
        let correoElectronicoCliente = document.getElementById('Email').value;

        const fechaNacimientoString = document.getElementById('fechaNacimientoCliente').value;
        let fechaFormateada = null;
        if(fechaNacimientoString){
            const fechaNacimientoDate = new Date(fechaNacimientoString);
            const anio = fechaNacimientoDate.getFullYear();
            const mes = String(fechaNacimientoDate.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
            const dia = String(fechaNacimientoDate.getDate()).padStart(2, '0');
            fechaFormateada = `${anio}-${mes}-${dia}`;
        }       

        let genero = document.getElementById('generoCliente').value;
        let dondeConocio = document.getElementById('dondeConocio').value;
        let notaCliente = document.getElementById('Cuentanos').value;

        // Enviar datos al servidor usando fetch
        fetch('http://localhost:3000/clientes/crear', {
            method: 'POST', // Especifica que se está realizando una solicitud POST.
            headers: {
                'Content-Type': 'application/json' // Indica que el cuerpo de la solicitud es JSON
            },
            // Convierte el objeto de datos a una cadena JSON para enviarlo en el cuerpo de la solicitud
            body: JSON.stringify({ tipoCliente, tipoId, numeroDocumento, nombreCliente, apellidoCliente, telefonoCliente,  telefonoFijoCliente, direccionCliente, ciudad, correoElectronicoCliente, fechaFormateada, genero, dondeConocio, notaCliente})
        })
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(data => {
            // Muestra un modal indicando que el cliente fue creado exitosamente
            //mostrarModal('Cliente creado exitosamente');
            // Reinicia el formulario después de crear el cliente
            //document.getElementById('clienteForm').reset();
        })
        .catch(error => {
            // Manejo de errores en caso de que la solicitud falle
            console.error('Error:', error); // Imprime el error en la consola
            //mostrarModal('Error al crear el cliente'); // Muestra un mensaje de error al usuario
        });
}
