// Para saber como executar o código leia o arquivo read_me primeiro.

const prompt = require('prompt-sync')()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let numero = Number(prompt("Digite um número: "))

if(typeof(numero) == 'number'){
    if(numero % 2 == 0){
        console.log(`O numero ${numero} é par`)
    }else{
        console.log(`O numero ${numero} é impar`)
    }
}