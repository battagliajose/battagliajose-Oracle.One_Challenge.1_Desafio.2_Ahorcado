//Devuelve un valor aleatorio entre valMin y ValMax.
function rnd(valMin, valMax) {
    return Math.round(Math.random()*(valMax-valMin)+valMin);
}

//Emite pitido con tono al azar.
function beep() {
    var context = new AudioContext();
    var oscillator = context.createOscillator();
    
    oscillator.type = "sine";
    oscillator.frequency.value = rnd(100,800);
    oscillator.connect(context.destination);
    
    oscillator.start(); 

    // Beep for 500 milliseconds
    setTimeout(function () {
        oscillator.stop();
    }, 50);   
}

function debug(datos) {
    if (debugFlag) {
        console.log(datos);
    }
}