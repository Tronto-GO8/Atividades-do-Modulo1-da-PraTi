// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

let soma = 0

for(i = 5; i != 0; i--){
    let numero = Number(prompt("Digite um número: "))
    soma += numero
}

console.log(soma)
