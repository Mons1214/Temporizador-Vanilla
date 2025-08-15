let temporizadorId = null; // Aquí guardamos el temporizador para encenderlo/apagarlo
let apagar = null;


// Esta función crea un color al azar
function getRandomColor() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) { // Necesitamos 6 letras o números
        color += letras[Math.floor(Math.random() * letras.length)]; // Elegimos uno al azar y lo pegamos
    }
    return color; // Mandamos el color listo
}

// Buscamos los botones en la página
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const encendido = document.querySelector("#encender")
const apagado = document.querySelector("#apagar")

// Cuando aprieto "Iniciar"
start.addEventListener("click", () => {
    if (temporizadorId === null) { // Solo si está apagado
        temporizadorId = setInterval(() => {
            document.body.style.backgroundColor = getRandomColor();
        }, 1000);
        start.disabled = true;  // Bloquea el botón iniciar
        stop.disabled = false;  // Activa el botón detener
    }
});


// Cuando aprieto "Detener"
stop.addEventListener("click", () => {
    if (temporizadorId !== null) { // Solo si está encendido
        clearInterval(temporizadorId); // Lo apagamos
        temporizadorId = null; // Lo dejamos listo para usar de nuevo
    }
    start.disabled = false; // Activa el botón iniciar
    stop.disabled = true;   // Bloquea el botón detener
});


encendido.addEventListener("click", () => {
    if (apagar === null) {
        apagar = setInterval(() => {
            document.querySelector(".control-div").style.backgroundColor = getRandomColor();
        }, 500);
        encendido.disabled = true;
        apagado.disabled = false;
    }
});

apagado.addEventListener("click", () => {
    if (apagar !== null) {
        clearInterval(apagar);
        apagar = null;
    }
    encendido.disabled = false;
    apagado.disabled = true;
});