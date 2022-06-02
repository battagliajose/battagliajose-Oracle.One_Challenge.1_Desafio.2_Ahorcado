var btnIniciarJuego = document.querySelector("#btnIniciarJuego");
var btnAgregarPalabra = document.querySelector("#btnAgregarPalabra");

var mainDiv = document.querySelector("#mainDiv");
var agregarPalabraDiv = document.querySelector("#agregarPalabraDiv");
var juegoDiv = document.querySelector("#juegoDiv");

var btnCancelarPalabra = document.querySelector("#btnCancelarPalabra");

var canvas = document.querySelector("#canvas");
var pincel = canvas.getContext("2d");
var canvasW = canvas.scrollWidth;
var canvasH = canvas.scrollHeight;

btnIniciarJuego.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    juegoDiv.classList.remove("oculta");
    
    pincel.fillStyle = 'rgb(200, 0, 0)';
    pincel.fillRect(10, 10, 50, 50);
    pincel.fillRect(10, 10, 50, 50);
    pincel.fillRect(20, 20, 50, 50);

    alert(canvasW + " - " + canvasH);
});

btnAgregarPalabra.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    agregarPalabraDiv.classList.remove("oculta");
});

btnCancelarPalabra.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    agregarPalabraDiv.classList.add("oculta");
});