var canvasH;
var canvasW;

var startPosX = canvasW * 0.33;
var startPosY = canvasH * 0.65;

var palabra;
var vidasUsadas = 0;



function iniciarJuego(){
    vidasUsadas = 0;
    palabra = getPalabra();
    resizeCanvas();
    draw();
    vidasUsadas = 0;
}

function draw() {
    dibujarGuiones(palabra);
    dibujarHorca();
    
    for (i = 1; i <= vidasUsadas; i++) {
        dibujarAhorcado(i);
    }
}

function dibujarGuiones(palabra) {
    var cantidadGuiones = palabra.length;

    context.strokeStyle = "#0A3871";
    
    context.beginPath();
    
    let posY = canvasH * 0.9;

    //Seteos para que los guiones ocupen medio canvas centrado.
    let startPosX = canvasW / 4;
    let guionWidth = (canvasW / 2) / cantidadGuiones;

    context.lineWidth = canvasH * 0.003;

    for (i = 0; i < cantidadGuiones; i++) {
        context.moveTo( startPosX + i * guionWidth, posY);
        context.lineTo( startPosX + (i+1) * guionWidth - 10, posY);
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

    draw();
    logCanvasSize();
}

function logCanvasSize() {
    var canvasW = context.canvas.width;
    var canvasH = context.canvas.height;
    console.log(canvasW + " - " + canvasH);
}

function getPalabra(){
    var palabras = ["PANCHO","MANZANA","PAJARO","AVION","PLATO", "CAMARA", "ARBOL", "SILLA", "LIBRO", "BANANA"]
    var palabra = palabras[rnd(0, palabras.length - 1)];
    console.log(palabra);
    return palabra;
}

