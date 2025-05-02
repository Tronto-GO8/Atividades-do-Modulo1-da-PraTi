// Para saber como executar o código leia o arquivo read_me primeiro.

const prompt = require('prompt-sync')()

//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.
let fibonate = 1
let numero_anterior = 0
for(i= 1; i != 11; i++){
    console.log(fibonate)
    fibonate += numero_anterior
    numero_anterior = fibonate - numero_anterior
}