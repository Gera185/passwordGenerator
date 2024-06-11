const textPassw = document.getElementById("contraseña-generada");
textPassw.innerText = "Contraseña generada";

const checkMayuscula = document.getElementById("mayuscula");
const checkMinuscula = document.getElementById("minuscula");
const checkNumeros = document.getElementById("numero");
const checkSimbolos = document.getElementById("simbolo");
const buttonCopy = document.getElementById("btn");

const PATTERN_MAY = /(?=.*[A-Z])/;
const PATTERN_MIN = /(?=.*[a-z])/;
const PATTERN_NUM = /(?=.*[0-9])/;
const PATTERN_SYM = /(?=.*[!#%&<>=@{}~$()*+?]+)/;

let posibles = [];
let password = "";
let exit = false;

const ABC_MIN = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const ABC_MAY = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const NUM = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMB = ["$", "@", "#", "&", "!", "¡", "?", "¿"];