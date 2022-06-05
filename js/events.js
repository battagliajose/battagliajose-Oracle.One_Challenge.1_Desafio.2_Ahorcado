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
    iniciarJuego();
});

/*Canvas responsive*/
window.addEventListener("resize", resizeCanvas); 

document.addEventListener("keypress", function (event){
    console.log("keypress detected! - " + event.key);
    context.font = "30px Arial";
    context.fillText(event.key, rnd(0,1000), rnd(0,1000));
    vidasUsadas++;
    dibujarAhorcado(vidasUsadas) 
});