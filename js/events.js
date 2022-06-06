btnIniciarJuego.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    juegoDiv.classList.remove("oculta");
    iniciarJuego();
});

btnAgregarPalabra.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    agregarPalabraDiv.classList.remove("oculta");
});

btnGuardarPalabra.addEventListener("click", function(){
    agregarPalabraDiv.classList.add("oculta");
    juegoDiv.classList.remove("oculta");
    guardarNuevaPalabraYEmpezarJuego();
})

btnCancelarPalabra.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    agregarPalabraDiv.classList.add("oculta");
    console.log(txtNuevaPalabra.value);
    txtNuevaPalabra.value = "";
});

btnNuevoJuego.addEventListener("click", function(){
    iniciarJuego();
})

btnDesistir.addEventListener("click", function(){
    mainDiv.classList.remove("oculta");
    juegoDiv.classList.add("oculta");
    keyProcessingFlag = true;
});

txtNuevaPalabra.addEventListener("input", function(){
    beep();
});



/*Canvas responsive*/
window.addEventListener("resize", resizeCanvas); 

document.addEventListener("keypress", function (event){
    if(keyProcessingFlag) {
        procesarTecla(event);
    }
});