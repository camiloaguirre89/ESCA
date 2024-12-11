function crearProveedor() {
    alert("ingresa a crear proveedor");
    // Llama a la función de validación y solo procede si el formulario es válido
        // Obtiene los valores de los campos del formulario
        let nitProveedor = parseInt(document.getElementById('Nit').value);
        let tipoProveedor = document.getElementById('tipoPersona').value;
        let razonSocial = document.getElementById('nombreRazonSocial').value;
        let representanteLegal = document.getElementById('nombreRepresentanteLegal').value;
        let idRepresentanteLegal = parseInt(document.getElementById('IDRepresentanteLegal').value);
        let telefono = parseFloat(document.getElementById('telefono').value);
        let direccion = document.getElementById('direccionProveedor').value;
        let ciudad = document.getElementById('ciudadProveedor').value;
        let correoElectronico = document.getElementById('Email').value;
        let estado = document.getElementById('estadoActividad').value;

        let fechaIngresoProveedor = document.getElementById('fechaIngreso').value;
        let fechaFormateada = null;
        if(fechaIngresoProveedor){
            alert(fechaIngresoProveedor);
            const fechaIngresoDate = new Date(fechaIngresoProveedor);
            const anio = fechaIngresoDate.getFullYear();
            const mes = String(fechaIngresoDate.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
            const dia = String(fechaIngresoDate.getDate()).padStart(2, '0');
            fechaFormateada = `${anio}-${mes}-${dia}`;
        }
        let notaProveedor = document.getElementById('Cuentanos').value;
        

        // Enviar datos al servidor usando fetch
        fetch('http://localhost:3000/proveedor/crear', {
            method: 'POST', // Especifica que se está realizando una solicitud POST.
            headers: {
                'Content-Type': 'application/json' // Indica que el cuerpo de la solicitud es JSON
            },
            // Convierte el objeto de datos a una cadena JSON para enviarlo en el cuerpo de la solicitud
            body: JSON.stringify({nitProveedor, tipoProveedor, razonSocial, representanteLegal, idRepresentanteLegal, telefono,  direccion, ciudad, correoElectronico, estado, fechaFormateada, notaProveedor})
        })
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(data => {
            // Muestra un modal indicando que el cliente fue creado exitosamente
            //mostrarModal('Cliente creado exitosamente');
            // Reinicia el formulario después de crear el cliente
            //document.getElementById('clienteForm').reset();
            alert("proveedor creado correctamente");
            window.location.href = "PROVEEDORES.html";
        })
        .catch(error => {
            // Manejo de errores en caso de que la solicitud falle
            console.error('Error:', error); // Imprime el error en la consola
            //mostrarModal('Error al crear el cliente'); // Muestra un mensaje de error al usuario
        });
    }
