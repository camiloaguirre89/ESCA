const table = $('#datatable_users').DataTable();

document.addEventListener('DOMContentLoaded', (event) => {
    consultarProductos();
});

function consultarProductos(){
        // Enviar solicitud al servidor usando fetch para buscar el cliente
        fetch(`http://localhost:3000/productos/buscar`)
        .then(response => {
            // Verifica si la respuesta es correcta (código de estado 200)
            if (!response.ok) {
                throw new Error('Productos no encontrados'); // Lanza un error si el cliente no se encuentra
            }
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            console.log(data);
            // Comprueba si se recibió algún cliente en la respuesta
            if (data.length > 0) {
                table.clear();

                setTimeout(() => {
                    loadData(data); // Cargar nuevos datos automáticamente
                }, 1000);             
            } 
        })
        .catch(error => {
            // Manejo de errores en caso de que la solicitud falle
            console.error('Error:', error); // Imprime el error en la consola
            
        });

    }

    function loadData(data) {

        var element = document.getElementById("datatable_users");
        if (element) {
            table.rows.add(data.map(element => [
                element.id,
                element.codigoBarras,
                element.nombreProducto,
                element.marcaProducto,
                element.valorVenta,
                element.cantidadProducto
            ])); // Agrega los nuevos datos
            table.draw(); // Redibuja la tabla
        } else {
            console.error("Elemento no encontrado en el DOM.");
        }
        
    }

