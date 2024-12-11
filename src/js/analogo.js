const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calcular los ángulos de las manecillas
    const hourAngle = (hours % 12) * 30 + minutes * 0.5; // Cada hora = 30 grados, cada minuto = 0.5 grados
    const minuteAngle = minutes * 6; // Cada minuto = 6 grados
    const secondAngle = seconds * 6; // Cada segundo = 6 grados

    // Actualizar las manecillas
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializar el reloj
updateClock();
