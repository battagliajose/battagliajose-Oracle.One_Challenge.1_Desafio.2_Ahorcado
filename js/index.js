/*Botones*/
var btnIniciarJuego = document.querySelector("#btnIniciarJuego");
var btnAgregarPalabra = document.querySelector("#btnAgregarPalabra");
var btnCancelarPalabra = document.querySelector("#btnCancelarPalabra");
var btnDesistir = document.querySelector("#btnDesistir");

/*DIVS*/
var mainDiv = document.querySelector("#mainDiv");
var agregarPalabraDiv = document.querySelector("#agregarPalabraDiv");
var juegoDiv = document.querySelector("#juegoDiv");

/*Canvas*/
var context = document.querySelector("#canvas").getContext("2d");
var canvasH;
var canvasW;

/*Canvas responsive*/
window.addEventListener("resize", resizeCanvas); 

btnIniciarJuego.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    juegoDiv.classList.remove("oculta");
    resizeCanvas();
    draw();
});

function draw() {
    context.fillStyle = 'rgb(200, 0, 0)';
    context.fillRect(10, 10, 50, 50);
    context.fillRect(10, 10, 50, 50);
    context.fillRect(20, 20, 50, 50);
}

function resizeCanvas() {
    context.canvas.height = document.documentElement.clientHeight * 0.5;
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

btnAgregarPalabra.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    agregarPalabraDiv.classList.remove("oculta");
});

btnCancelarPalabra.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    agregarPalabraDiv.classList.add("oculta");
});

btnDesistir.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    juegoDiv.classList.add("oculta");
});