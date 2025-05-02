// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numero = prompt("Digite um númeor: ")
for(let i = 10; i != 0; i--){
    console.log(numero)
}