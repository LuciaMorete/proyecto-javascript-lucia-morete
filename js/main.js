// Función para tirar el dado:
function tirarDado() {
    return Math.ceil(Math.random() * 6);
}

// Función para sumar o restar casillas según la sorpresa de cada casilla determinada:
function calcularSorpresa (casilla) {
    switch (casilla) {
        case 5:
            alert("Caíste en la casilla 5: ¡Rosquilla gratis! Avanzas 3 casillas.");
            return 3;
            break;
        case 12:
            alert("Caíste en la casilla 12: Puerco araña. Retrocedes 2 casillas.");
            return -2;
            break;
        case 18:
            alert("Caíste en la casilla 18: Tomas una Duff en la Taberna de Moe. Avanzas 3 casillas.");
            return 3;
            break;
        case 22: 
            alert("Caíste en la casilla 22: Mr. Burns te hace volver a trabajar. ¡Volvés a cero!.");
            return -22;
            break;
        case 27: 
            alert("Caíste en la casilla 27: ¡Rosquilla gratis! Avanzas 3 casillas.");
            return 3;
            break;
        default:
            return 0;
            break;
    }
}

// Mensajes de inicio del juego:
alert ("¡Hola! ¡Este es el Juego de la Dona!")
alert ("El objetivo del juego es que Homero llegue a la casilla 30 donde se encuentra el Planeta de las Donas.")
alert ("Tirás el dado y Homero va a ir avanzando y encontrando obstáculos y sorpresas en el camino. Para ganar tenés que llegar a la casilla 30 exactamente, no podés pasarte. ¡Empecemos!");

// Función del juego:
function jugarJuegoDeLaDona () {
    let posicionHomero = 0;

    // Bucle para que el juego continue mientras no se llegue a la casilla 30:
    while (posicionHomero !== 30) {
        alert ("Tira el dado");
        const NUMERO_DADO =  tirarDado();
        alert ("Sacaste un "+ NUMERO_DADO);
        posicionHomero += NUMERO_DADO;
        alert ("Homero está en la casilla " + posicionHomero);
        const SORPRESA = calcularSorpresa (posicionHomero);
        
        // Condicional para que se sumen o resten las sorpresas de las casillas:
        if (SORPRESA !== 0) { 
            posicionHomero += SORPRESA;
            alert ("Homero está en la casilla " + posicionHomero);
        }

        // Condicional para cuando llegue a la casilla 30 o se pase y tenga que volver:
        if (posicionHomero === 30) {
            alert("¡Felicitaciones! ¡Homero llegó al Planeta de las Donas! ¡Ganaste!");
            const REINICIAR = confirm ("¿Querés jugar otra partida?")
            if (REINICIAR == true) {
                jugarJuegoDeLaDona ()
            } else {
                alert ("¡Gracias por jugar al Juego de la Dona! ¡Hasta la próxima!")
            }
        } else if (posicionHomero > 30) {
            alert("Te pasaste del Planeta de las Donas. Debes retroceder.");
            while (posicionHomero > 30) { 
                alert ("Tira el dado");
                const RETROCESO = tirarDado();
                alert ("Sacaste un "+ NUMERO_DADO);
                posicionHomero -= RETROCESO;
                alert("Homero retrocede a la casilla " + posicionHomero);
            }
        } 
    }
}

// Llamada a la función para que se inicie el juego:

setTimeout(() => {
    jugarJuegoDeLaDona ()
}, 2000);
