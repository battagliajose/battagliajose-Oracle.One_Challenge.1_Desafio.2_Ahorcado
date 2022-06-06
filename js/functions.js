var palabras = ["PANCHO","MANZANA","PAJARO","AVION","PLATO", "CAMARA", "ARBOL", "SILLA", "LIBRO", "BANANA", "PARRILLA", "BYTECODE", "BINARIO", "FUNCION", "VARIABLE", "ENTERO", "DOBLE", "ARREGLO"]

var canvasH;
var canvasW;

var keyProcessingFlag = false; //Bandera para procesar pulsaciones de teclado solo en la vista de juego.

var debugFlag = false;

// Usado en el dibujado de la Horca y del Ahorcado
var startPosX = canvasW * 0.33;
var startPosY = canvasH * 0.65;

var palabra;
var vidasUsadas = 0;

var posGuiones = [];
var letrasCorrectas = []
var letrasIncorrectas = []

var cantLetrasCorrectas;

function iniciarJuego(){

    letrasCorrectas = []
    letrasIncorrectas = []
    vidasUsadas = 0;
    vidasUsadas = 0;
    keyProcessingFlag = true;
    cantLetrasCorrectas = 0;

    palabra = getPalabra();
    resizeCanvas();
}

function draw() {
    dibujarGuiones(palabra);
    dibujarHorca();
    
    for (i = 1; i <= vidasUsadas; i++) {
        dibujarAhorcado(i);
    }

    for (i = 0; i < letrasCorrectas.length; i++) {
        dibujarLetraCorrecta(letrasCorrectas[i]);
    }

    dibujarLetrasIncorrectas();
}

function dibujarGuiones(palabra) {
    var cantidadGuiones = palabra.length;

    context.strokeStyle = "#0A3871";
    
    context.beginPath();
    
    let posY = canvasH * 0.9;

    //Seteos para que los guiones ocupen medio canvas centrado.
    let posX = canvasW / 4;
    let guionWidth = (canvasW / 2) / cantidadGuiones;

    context.lineWidth = canvasH * 0.003;

    for (i = 0; i < cantidadGuiones; i++) {
        posGuiones.push(posX + i * guionWidth); //Guarda la posición para ubicar las letras.
        debug("posicion guiones: " + posGuiones[i])
        context.moveTo(posX + i * guionWidth, posY);
        context.lineTo(posX + (i+1) * guionWidth - 10, posY);
        context.stroke();
    }
}

function dibujarHorca() {
    context.fillStyle = "rgb(120,060,000)";
    
    startPosX = canvasW * 0.33;
    startPosY = canvasH * 0.65;

    context.strokeStyle = "#0A3871";
    
    context.beginPath();

    context.lineWidth = canvasH * 0.008;

    drawLine(startPosX, startPosY, startPosX + canvasW * 0.33, startPosY); //Base

    context.beginPath();
    context.moveTo(startPosX + canvasW * 0.10, startPosY);
    context.lineTo(startPosX + canvasW * 0.10, startPosY - canvasH * 0.4); // Poste.
    context.lineTo(startPosX + canvasW * 0.25, startPosY - canvasH * 0.4); // Travesaño.
    context.lineTo(startPosX + canvasW * 0.25, startPosY - canvasH * 0.3); // Soga.
    context.stroke();
}

function dibujarAhorcado(etapa) {
    switch (etapa) {
        case 1: //Cabeza.
            //Ver cara que vaya cambiando a medida que se pierden vidas?
            context.beginPath();
            context.arc(startPosX + canvasW * 0.25, startPosY - canvasH * 0.27, canvasH * 0.025, 0, 2 * Math.PI);
            context.stroke();
            context.beginPath();
            context.arc(startPosX + canvasW * 0.25, startPosY - canvasH * 0.27, canvasH * 0.015, 0, 1 * Math.PI);
            context.stroke();
            context.beginPath();
            context.arc(startPosX + canvasW * 0.24, startPosY - canvasH * 0.28, canvasH * 0.0015, 0, 1 * Math.PI);
            context.stroke();
            context.beginPath();
            context.arc(startPosX + canvasW * 0.26, startPosY - canvasH * 0.28, canvasH * 0.0015, 0, 1 * Math.PI);
            context.stroke();

            break;
        case 2: //Cuerpo
            drawLine(startPosX + canvasW * 0.25, startPosY - canvasH * 0.24, startPosX + canvasW * 0.25, startPosY - canvasH * 0.14);
            break;
        case 3: //Brazo Der.
            drawLine(startPosX + canvasW * 0.25, startPosY - canvasH * 0.22, startPosX + canvasW * 0.21, startPosY - canvasH * 0.15)
            break;
        case 4: //Brazo Izq.
            drawLine(startPosX + canvasW * 0.25, startPosY - canvasH * 0.22, startPosX + canvasW * 0.29, startPosY - canvasH * 0.15)
            break;
        case 5: //Pierna Der.
            drawLine(startPosX + canvasW * 0.25, startPosY - canvasH * 0.14, startPosX + canvasW * 0.21, startPosY - canvasH * 0.05);
            break;
        case 6: //Pierna Izq.
            drawLine(startPosX + canvasW * 0.25, startPosY - canvasH * 0.14, startPosX + canvasW * 0.29, startPosY - canvasH * 0.05);
            break;
    }
}

function drawLine(sPosX, sPosY, ePosX, ePosY) {
    context.beginPath();
    context.moveTo(sPosX, sPosY);
    context.lineTo(ePosX, ePosY);
    context.stroke();
}

function resizeCanvas() {
    context.canvas.height = document.documentElement.clientHeight * 0.7;
    context.canvas.width = document.documentElement.clientWidth * 0.5;
    canvasH = context.canvas.height;
    canvasW = context.canvas.width;

    posGuiones = [];

    draw();
    logCanvasSize();
}

function logCanvasSize() {
    var canvasW = context.canvas.width;
    var canvasH = context.canvas.height;
    debug(canvasW + " - " + canvasH);
}

function getPalabra(){
    
    var palabra = palabras[rnd(0, palabras.length - 1)];
    debug(palabra);
    return palabra;
}

function guardarNuevaPalabraYEmpezarJuego() {
    if (txtNuevaPalabra.value != "") {
        palabras.push(txtNuevaPalabra.value.toUpperCase());
        txtNuevaPalabra.value = "";
        iniciarJuego();
    }
}

function procesarTecla(event){
    debug("Tecla Presionada! - Key: " + event.key + " KeyCode: " + event.keyCode);

    //Verifica si es un caracter alfabetico en mayúsculas o minúsculas.
    if(event.keyCode >= 65 && event.keyCode <= 90 | event.keyCode >=97 && event.keyCode <= 122) {
        verificarLetra(event.key.toUpperCase());
    } else {
        beep();
    }
}

function verificarLetra(letra) {
    debug("Palabra: " + palabra + " letra:" + letra);
    if(palabra.includes(letra) && !letrasCorrectas.find(element => element == letra)) {
        letrasCorrectas.push(letra);
        dibujarLetraCorrecta(letra);
        debug("Palabra: " + palabra + " letra:" + letra);
    } else {
        if(!letrasIncorrectas.find(element => element == letra) && !palabra.includes(letra)) {
            letrasIncorrectas.push(letra);
            dibujarLetrasIncorrectas();
            vidasUsadas++;
            dibujarAhorcado(vidasUsadas);
        }
    }

    if (vidasUsadas >= 6) {
        gameOver();
    }

    if (cantLetrasCorrectas == palabra.length) {
        juegoGanado()
    }
}

function gameOver() {
    keyProcessingFlag = false;
    debug("Game Over!");

    context.fillStyle = "rgb(255, 0, 0 )";
    var fontSize = canvasW * 0.08;
    context.font = fontSize + "px Arial";

    context.fillText("Has Perdido!", canvasW * 0.25, canvasH * 0.75);
}

function juegoGanado() {
    keyProcessingFlag = false;
    debug("Has ganado!");

    context.fillStyle = "rgb(0, 200, 0 )";
    var fontSize = canvasW * 0.08;
    context.font = fontSize + "px Arial";

    context.fillText("Has Ganado!", canvasW * 0.25, canvasH * 0.75);
}

function dibujarLetraCorrecta(letra) {
    context.fillStyle = "#0A3871";
    var fontSize = canvasW * 0.08;
    context.font = fontSize + "px Arial";

    var posicion = 0;
    
    posicion = palabra.indexOf(letra, posicion);

    while(posicion > -1) {
        context.fillText(letra, posGuiones[posicion], canvasH * 0.87);
        debug(posicion + " - P: " + posicion);
        posicion = palabra.indexOf(letra, posicion + 1);
        cantLetrasCorrectas++;
    }
}

function dibujarLetrasIncorrectas() {
    context.fillStyle = "rgb(255, 0, 0 )";
    var fontSize = canvasW * 0.04;
    context.font = fontSize + "px Arial";

    context.fillText(letrasIncorrectas, canvasW * 0.20, canvasH * 0.97);
}
