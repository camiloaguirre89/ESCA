function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById('reloj').innerText = hora;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();s