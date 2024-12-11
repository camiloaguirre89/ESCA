function crearProducto() {
    // Llama a la función de validación y solo procede si el formulario es válido
        // Obtiene los valores de los campos del formulario
        let codigoBarras = document.getElementById('codigoBarras').value;
        let nombreProducto = document.getElementById('nombreProducto').value;
        let marcaProducto = document.getElementById('marcaProducto').value;
        let referenciaProducto = document.getElementById('referenciaProducto').value;
        let valorIngreso = parseFloat(document.getElementById('valorIngreso').value);
        let valorIVA = parseFloat(document.getElementById('valorIVA').value);
        let valorVenta = parseFloat(document.getElementById('valorVenta').value);
        let estadoIngresoProducto = document.getElementById('estadoIngreso').value;

        let fechaIngreso = document.getElementById('fechaIngreso').value;
        let fechaFormateada = null;
        if(fechaIngreso){
            alert(fechaIngreso);
            const fechaIngresoDate = new Date(fechaIngreso);
            const anio = fechaIngresoDate.getFullYear();
            const mes = String(fechaIngresoDate.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
            const dia = String(fechaIngresoDate.getDate()).padStart(2, '0');
            fechaFormateada = `${anio}-${mes}-${dia}`;
        }

        let cantidadProducto = parseInt(document.getElementById('cantidadIngresada').value);
        let descripcionProdcuto = document.getElementById('Cuentanos').value;
        

        // Enviar datos al servidor usando fetch
        fetch('http://localhost:3000/productos/crear', {
            method: 'POST', // Especifica que se está realizando una solicitud POST.
            headers: {
                'Content-Type': 'application/json' // Indica que el cuerpo de la solicitud es JSON
            },
            // Convierte el objeto de datos a una cadena JSON para enviarlo en el cuerpo de la solicitud
            body: JSON.stringify({ codigoBarras, nombreProducto, marcaProducto, referenciaProducto, valorIngreso, valorIVA,  valorVenta, estadoIngresoProducto, fechaFormateada, cantidadProducto, descripcionProdcuto})
        })
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(data => {
            // Muestra un modal indicando que el cliente fue creado exitosamente
            //mostrarModal('Cliente creado exitosamente');
            // Reinicia el formulario después de crear el cliente
            //document.getElementById('clienteForm').reset();
            alert("Producto creado correctamente");
            window.location.href = "PRODUCTOS.html";
        })
        .catch(error => {
            // Manejo de errores en caso de que la solicitud falle
            console.error('Error:', error); // Imprime el error en la consola
            //mostrarModal('Error al crear el cliente'); // Muestra un mensaje de error al usuario
        });
    }
