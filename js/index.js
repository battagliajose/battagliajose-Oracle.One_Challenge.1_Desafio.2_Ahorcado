var btnAgregarPalabra = document.querySelector("#btnAgregarPalabra");
var mainDiv = document.querySelector("#mainDiv");
var agregarPalabraDiv = document.querySelector("#agregarPalabraDiv");

var btnCancelarPalabra = document.querySelector("#btnCancelarPalabra");

btnAgregarPalabra.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    agregarPalabraDiv.classList.remove("oculta");
});

btnCancelarPalabra.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    agregarPalabraDiv.classList.add("oculta");
});