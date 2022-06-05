var canvasH;
var canvasW;
var palabra;

function iniciarJuego(){
    palabra = getPalabra();
    resizeCanvas();
    draw();
}

function draw() {
    dibujarGuiones(palabra);
    dibujarHorca();
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

    let startPosX = canvasW * 0.33;
    let startPosY = canvasH * 0.65;

    context.strokeStyle = "#0A3871";
    
    context.beginPath();

    context.lineWidth = canvasH * 0.008;
    context.linecap = "round";

    drawLine(startPosX, startPosY, startPosX + canvasW * 0.33, startPosY); //Base

    /*drawLine(startPosX + canvasW * 0.10, startPosY, startPosX + canvasW * 0.10, startPosY - canvasH * 0.4); //Poste
    drawLine(startPosX + canvasW * 0.10, startPosY - canvasH * 0.4, startPosX + canvasW * 0.25, startPosY - canvasH * 0.4) //Travesaño
    drawLine(startPosX + canvasW * 0.25, startPosY - canvasH * 0.4, startPosX + canvasW * 0.25, startPosY - canvasH * 0.3)*/

    context.beginPath();
    context.moveTo(startPosX + canvasW * 0.10, startPosY);
    context.lineTo(startPosX + canvasW * 0.10, startPosY - canvasH * 0.4);
    context.lineTo(startPosX + canvasW * 0.25, startPosY - canvasH * 0.4);
    context.lineTo(startPosX + canvasW * 0.25, startPosY - canvasH * 0.3);
    context.stroke();
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
    
    return palabras[rnd(0, palabras.length)];
}

