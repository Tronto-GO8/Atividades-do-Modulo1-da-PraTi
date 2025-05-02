// Para saber como executar o código leia o arquivo read_me primeiro.

const prompt = require('prompt-sync')()

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

let numero = Number(prompt("Digite um número para descobrir seus fatorial: "))
let valor_final = numero
for(i = numero -1; i != 0; i--){
    valor_final *= i
}
console.log(valor_final)