let numeroSecreto= 0;
let intentos= 0;
let listaDeNumeroSecreto= [];
let numeroMaximo= 10;

console.log(numeroSecreto);

function AñadirTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroDeUsuario===numeroSecreto){
        AñadirTexto('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario>numeroSecreto){
            AñadirTexto('p', 'El número secreto es menor');
        } else {
            AñadirTexto('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();

    }

    return;

}

function limpiarCaja(){
    let valorCaja= document.querySelector('#valorDeUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaDeNumeroSecreto);
    //si ya sorteamos todos los números
    if(listaDeNumeroSecreto.length == numeroMaximo){
        AñadirTexto('p', 'Ya se sortearon todos los números posibles');
    } else {

        if (listaDeNumeroSecreto.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaDeNumeroSecreto.push(numeroGenerado)
            return numeroGenerado;
    
        }
    }
}

function CondicionesIniciales(){
    AñadirTexto('h1', 'Juego del número secreto');
    AñadirTexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //! limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    CondicionesIniciales();
    //generar el numero aleatorio
    // iniicar el numero intentos
    // desehabiliatar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

CondicionesIniciales();
