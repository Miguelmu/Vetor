//console.log ('teste no cosole do javascript')
/*
Solicite ao usuário que insira dois números inteiros positivos;

Utilize um vetor para armazenar esses dois números;

Verifique se os números inseridos são inteiros positivos. Caso contrário,
 solicite ao usuário para inseri-los novamente;

Divida os dois números inteiros positivos;

Imprima na tela o resultado da divisão.*/
/*
 let numeros1 = prompt("insira o primeiro numero inteiros positivos");

let numeros2 = prompt("insira o segundo numero inteiros positivos");
  


if(numeros1 >= 0 && numeros2 >= 0){
let resultado = numeros1/numeros2;
console.log(resultado)
}
else{
 console.log("insira novamente") 
}


let numeros = [];
let numero1 = solicitaPrimeiroNumero();
let numero2 = solicitaSegundoNumero();

function solicitaPrimeiroNumero(){
    
};      */

//o vetor - armazenar os valores dos numeros
//funções - definir o valor dos numeros


let numeros = [];
 numeros[0] = solicitaPrimeiroNumero();
 numeros[1] = solicitaSegundoNumero();

function solicitaPrimeiroNumero(){
    let numeros1 = prompt("insira o primeiro numero inteiros positivos");
    if (numeros1 < 0){
        alert("Escolha outro numero")
        solicitaPrimeiroNumero()
    }  
    else{
        return numeros1
    }
}
   
function solicitaSegundoNumero(){ 
    let numeros2 = prompt("insira o segundo numero inteiros positivos");
    if (numeros2 < 0){
        alert("Escolha outro numero")
        solicitaSegundoNumero()
    }  
    else{
        return numeros2
    }
}
console.log(numeros[0]/numeros[1])

let result = numeros[0]/numeros[1]