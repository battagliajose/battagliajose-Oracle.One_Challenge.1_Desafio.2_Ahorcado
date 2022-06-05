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

txtNuevaPalabra.addEventListener("input", function(){
    beep();
});

btnIniciarJuego.addEventListener("click", function(){
    mainDiv.classList.add("oculta");
    juegoDiv.classList.remove("oculta");
    palabra = getPalabra();
    resizeCanvas();
    draw();
});

/*Canvas responsive*/
window.addEventListener("resize", resizeCanvas); 