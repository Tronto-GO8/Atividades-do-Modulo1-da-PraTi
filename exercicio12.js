// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

let numero = Number(prompt("Qual número deseja ver a tábuada? "))

for(i = 0; i != 11; i++){
    console.log(`${numero} * ${i} = ${numero*i}`)
}