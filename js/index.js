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

/*InputText Nueva Palabra*/
var txtNuevaPalabra = document.querySelector("#txtNuevaPalabra");

txtNuevaPalabra.addEventListener("input", function(){
    beep();
});

btnIniciarJuego.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    juegoDiv.classList.remove("oculta");
    resizeCanvas();
    draw();
});

function draw() {
    context.fillStyle = 'rgb(200, 0, 0)';
    context.fillRect(canvasW/10, canvasH/10, canvasW/10, canvasH/10);
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

btnAgregarPalabra.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    agregarPalabraDiv.classList.remove("oculta");
});

btnCancelarPalabra.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    agregarPalabraDiv.classList.add("oculta");
    console.log(txtNuevaPalabra.value);
    txtNuevaPalabra.value = "";
});

btnDesistir.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    juegoDiv.classList.add("oculta");
});

function beep() {
    var context = new AudioContext();
    var oscillator = context.createOscillator();
    
    oscillator.type = "sine";
    oscillator.frequency.value = Math.round(Math.random()*800+100);
    oscillator.connect(context.destination);
    
    oscillator.start(); 

    // Beep for 500 milliseconds
    setTimeout(function () {
        oscillator.stop();
    }, 50);   
}