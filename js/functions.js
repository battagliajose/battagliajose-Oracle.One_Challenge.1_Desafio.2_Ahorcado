var canvasH;
var canvasW;
var palabra;

function iniciarJuego(){
    palabra = getPalabra();
    resizeCanvas();
    draw();
}

function draw() {
    context.fillStyle = 'rgb(200, 0, 0)';
    context.fillRect(canvasW/10, canvasH/10, canvasW/10, canvasH/10);

    console.log(palabra);
    dibujarGuiones(palabra);
}

function dibujarGuiones(palabra) {
    var cantidadGuiones = palabra.length;

    context.fillStyle = "black";
    context.beginPath();
    
    let posY = canvasH * 0.9;
    let posX = canvasW / cantidadGuiones;

    context.lineWidth = canvasH *0.01;

    guionWidth = canvasW / cantidadGuiones;

    for (i = 0; i < cantidadGuiones; i++) {
        context.moveTo( i * guionWidth, posY);
        context.lineTo( (i+1) * guionWidth - 10, posY);
        context.stroke();
    }
}

function resizeCanvas() {
    context.canvas.height = document.documentElement.clientHeight * 0.6;
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
    var palabras = ["POCHOCLO","MANZANA","PAJARO","AVION","PLATO", "CAMARA", "ARBOL", "COMPUTADORA", "LIBRO", "ESCRITORIO"]
    
    return palabras[rnd(0, palabras.length)];
}

