document.querySelector("#generar").addEventListener("click", function(event){
    generatePassword(event);
});

function generateNum(list){
    return Math.floor(Math.random() * (list.length) + 1);
}

function checkPasswordCorrect(password){
    console.log(PATTERN_MAY.test(password));
    if(checkMayuscula.checked && (PATTERN_MAY.test(password)==false)) return false;
    if(checkMinuscula.checked && (PATTERN_MIN.test(password)==false)) return false;
    if(checkNumeros.checked && (PATTERN_NUM.test(password)==false)) return false;
    if(checkSimbolos.checked && (PATTERN_SYM.test(password)==false)) return false;
    
    return true;
}

function generatePassword(event){
    if(!checkMayuscula.checked && !checkMinuscula.checked && !checkNumeros.checked && !checkSimbolos.checked) return;
    buttonCopy.value = 'Copiar!';
    event.preventDefault();
    textPassw.innerText = "";
    let posibles = [];
    exit = false;

    if(checkMayuscula.checked) posibles = posibles.concat(ABC_MAY);
    if(checkMinuscula.checked) posibles = posibles.concat(ABC_MIN);
    if(checkNumeros.checked) posibles = posibles.concat(NUM); 
    if(checkSimbolos.checked) posibles = posibles.concat(SYMB);

    while (!exit){
        password = "";
        for(i=0; i<=8; i++){
            num = generateNum(posibles);
            password = password.concat(posibles[num-1]);
        };

        exit = checkPasswordCorrect(password);
        console.log(exit)
    };
    console.log("La contraseña es: ", password);

    textPassw.innerText = password;
} 

function copyPassword(){
    if(textPassw.textContent==="Contraseña generada") return;
    
    buttonCopy.value = '¡Copiado!';
    navigator.clipboard.writeText(textPassw.textContent);
}
