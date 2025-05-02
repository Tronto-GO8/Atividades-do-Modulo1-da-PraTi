// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

let lado1 = Number(prompt("Qual o valor do primeiro lado do triângulo? "))
let lado2 = Number(prompt("Qual o valor do segundo lado do triângulo? "))
let lado3 = Number(prompt("Qual o valor do terceiro lado do triângulo?"))

if(lado1 + lado2 > lado3 ||lado2 + lado3 > lado1 || lado1 + lado3 > lado2){
    if(lado1 == lado2 && lado2 == lado3){
        console.log("O triângulo é equilátero")
    }else if(lado1 != lado2 && lado2 !=  lado3){
        console.log("O triângulo é escaleno")
    }else if(lado1 == lado2 || lado2 ==  lado3 || lado1 == lado3){
        console.log("O triângulo é Isósceles")
    }
}else{
    console.log("Não é um triângulo")
}
