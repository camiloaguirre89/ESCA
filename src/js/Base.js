let dataTable;
let dataTableIsInitialized=false;

const dataTableOptions = {
    //scrollX: "1000px", //activar si tengo muchas columnas para  ue empiece a correr
    lengthMenu: [4, 8, 12, 16, 20], // este es para cuadrar el menu en cuantas se debe mostrar
    columnDefs:[
        { className: "centered", targets:[0, 1, 2, 3, 4, 5, 6] },   
        { orderable: false, targets:[5, 6] },
        //{ searchable: false, targets:[1] }, //buscar en columnas determinadas asi esta para que no busque en esa
        //{ width: "5%", targets: [0] }
    ],
    pageLength: 5,
    destroy:true,
    language:{
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando ...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior",
        }
    }
}

const initDataTable=async()=>{
    //proceso de inicializacion de la datatable si estuviera fija no deberia llamarla
if(dataTableIsInitialized){
    dataTable.destroy();
}

    await listUsers();

    dataTable=$("#datatable_users").DataTable(dataTableOptions);

    dataTableIsInitialized = true;

};

const listUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Aquí está la base de usuarios FALSOS
        const users = await response.json();

        let content2 = ``;
        // user hace referencia a cada objeto e index a la posición
        users.forEach((user, index) => {
            // exprimento para que hagan muchos usuarios, cambiar luego
            for(let x=0;x<1;x++){
            content2 += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.company.name}</td>
                    <td><i class="fa-solid fa-circle-check" style="color: green;"></i></td>
                    <td>
                        <button class="btn-sm btn-primary"><i class="fa-solid fa-pen-to-square"></i></i></button>
                        <button class="btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>`;
            }
        });
        const tableBody_users = document.getElementById("tableBody_users");
        tableBody_users.innerHTML = content2;
    } catch (ex) {
        alert(ex);
    }
}


window.addEventListener("load", async () => {
    await initDataTable();
});
