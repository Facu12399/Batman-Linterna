let sonidoBatman = document.querySelector('.bati_encendido');
let sonidoBoton = document.querySelector('.bati_click');

let batman = document.querySelector('.batman');
let bati_boton = document.querySelector('bati_boton');

let estado_linterna = "apagado";

batman.addEventListener('click',controlarLinterna);

function controlarLinterna(){
    if (estado_linterna == "apagado") {
        estado_linterna = "encendido";
        //efecto de sonido
        sonidoLinterna();
        batman.classList.add('batman-activo');
    } else {
        estado_linterna = "apagado";
        sonidoLinterna();
        batman.classList.remove('batman-activo') 
    }
}

function sonidoLinterna(){
    if(sonidoBatman.paused){
        sonidoBoton.play();
        sonidoBatman.play();
    } else{
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;
    }
}