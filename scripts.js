const textPassw = document.getElementById("contraseña-generada");
textPassw.innerText = "Contraseña generada";

const checkMayuscula = document.getElementById("mayuscula");
const checkMinuscula = document.getElementById("minuscula");
const checkNumeros = document.getElementById("numero");
const checkSimbolos = document.getElementById("simbolo");
let password = "";

const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const NUM = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMB = ["$", "@"];

document.querySelector("#generar").addEventListener("click", function(event){
    event.preventDefault();
    if(checkMayuscula.checked){
        console.log("Estoy checkeado")
    };
    console.log("Holaa funciono");
    textPassw.innerText = "Holaa funciono";
});


