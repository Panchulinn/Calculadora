// comentario de una linea
/* comentario de más
de una línea*/
const prompt = require("prompt-sync")(); //esto para pdoer usar prompt
// ejecutar por terminal: npm install prompt-sync
// indentar control +k control +F

/*
var nombre;
var n1, n2, resultado;

seguir = prompt("Bienvenido a la calculadora, ¿quiere seguir? s/n: ");
if (seguir == "s") {
    opcion = parseInt(prompt("1.- Suma, 2.- Resta, 3.- Multiplicación, 4.- División, ¿quiere hacer?:"));
    if (opcion ==1){
        console.log ("esto es suma")
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        resultado = n1 + n2;
        console.log(resultado)
    }
    else if (opcion ==2){
        console.log("esto es resta")
        n1= parseInt(prompt("Ignrese número 1: "))
        n2 = parseFloat(prompt("Ingrese número 2: "));
        resultado = n1 - n2;
        console.log(resultado)
    }
    else if (opcion ==3){
        console.log ("esto es multiplicacion")
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        resultado = n1 * n2;
        console.log(resultado)
    }
    else {
        console.log ("esto es division")
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        resultado = n1 / n2;
        console.log(resultado)
    }
}
else
    console.log("Chau");
*/
var n1, n2, operacion;
operacion = prompt("Que quiere hacer: ")
n1 = parseInt(prompt("Ingrese primer numero: "));
n2 = parseInt(prompt("Ingrese el segundo numero: "));

switch (operacion) {
    case "Sumar":
      resultado = n1 + n2;
      console.log(resultado)
      break;
    case "Resta":
      resultado = n1 - n2
      console.log(resultado)
      break;
    case "Multiplicacion":
      resultado = n1 * n2;
      console.log(resultado)
      break;
    case "Division":
      resultado = n1 / n2;
      console.log(resultado)
      break;
    default:
      console.log(resultado);
  }