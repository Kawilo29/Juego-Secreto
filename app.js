//comentario de prueba
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTexto(elemento,texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}
 
function verificarIntento() {
	let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
	if (numeroDeUsuario === numeroSecreto) {
		asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		//El usuario no acertó
		if (numeroDeUsuario > numeroSecreto) {
			asignarTexto('p','El numero secreto es menor');
		} else {
			asignarTexto('p','El numero secreto es mayor');	
		}
		intentos++
		limpiarCaja();
	}
	return;
}
 
function limpiarCaja(){
	document.querySelector('#valorUsuario').value = '';
}
 
function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
	
	console.log(numeroGenerado);
	console.log(listaNumerosSorteados);
	//Si ya sorteamos todos los números
	if (listaNumerosSorteados.length == numeroMaximo) {
		asignarTexto('p','Ya se sortearón todos los números posibles');
	} else {	
		//Si el numero generado esta incluido en la lista
		if (listaNumerosSorteados.includes(numeroGenerado)) {
			return generarNumeroSecreto();
		} else {
			listaNumerosSorteados.push(numeroGenerado);
			return numeroGenerado;
		}
	}
}

function condicionesIniciales() {
    asignarTexto('h1','Juego de numero secreto!');
    asignarTexto('p',`Ingresa por favor un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de número o solicitud de número
    //Generar nuevo número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
 
condicionesIniciales();


/*
Ejemplo para reiniciar el conteo de numeros aleatorio 
si se llega al limite de numeros secretos

function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }
    // Código omitido
}
*/