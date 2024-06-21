let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoAAsignar = document.querySelector(elemento);
  elementoAAsignar.innerHTML = texto;
  return;
}

function generarNumeroAleatorio() {
  let numerGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numerGenerado);
  console.log(numerosSorteados);

  //Validamos que se haya alcanzado la cantidad maxima permitida de numeros generados
  if (numerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", `Ya se sortearon todos los números posibles`);
    return
  } else {
    //Validamos si el numero ya fue sorteado
    if (numerosSorteados.includes(numerGenerado)) {
      return generarNumeroAleatorio();
    }
    numerosSorteados.push(numerGenerado);
    return numerGenerado;
  }
}

function verificarIntento() {
  let numeroIngresado = parseInt(document.getElementById("valorUsuario").value);

  if (numeroIngresado === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Felicidades, adivinaste el número secreto en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acerto
    if (numeroIngresado < numeroSecreto) {
      asignarTextoElemento(
        "p",
        "El número ingresado es menor al número secreto"
      );
    } else {
      asignarTextoElemento(
        "p",
        "El número ingresado es mayor al número secreto"
      );
    }
    intentos++;
    limpiarInput();
  }
  return;
}

function limpiarInput() {
  document.querySelector("#valorUsuario").value = "";
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Bienvenido al juego");
  asignarTextoElemento("p", `Adivina el número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar el input
  limpiarInput();

  //Setear elementos y variables con sus valores iniciales
  condicionesIniciales();

  //deshabilitar el boton
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
