const calendarBody = document.getElementById("calendarBody");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Mostrar el mes y el año
    monthYear.textContent = `${date.toLocaleString("default", { month: "long" })} ${year}`;

    // Obtener el primer día del mes
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Limpiar las filas anteriores
    calendarBody.innerHTML = "";

    // Crear las filas del calendario
    let row = document.createElement("tr");
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("td");
        cell.textContent = day;

        // Marcar el día actual
        const today = new Date();
        if (
            day === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
        ) {
            cell.classList.add("today");
        }

        row.appendChild(cell);

        // Comenzar una nueva fila cada semana
        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }
    }

    // Añadir la última fila al calendario
    if (row.children.length > 0) {
        calendarBody.appendChild(row);
    }
}

// Cambiar de mes
prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Renderizar el calendario inicial
renderCalendar(currentDate);
