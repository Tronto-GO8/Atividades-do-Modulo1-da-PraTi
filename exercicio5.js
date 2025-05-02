// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
let altura = prompt("Qual sua altura? ")
let peso = prompt("Qual seu peso? ")
let IMC = peso/altura**2

if(IMC > 30){
    console.log("Obesidade")
} else if(IMC >= 25 && IMC <= 29,9){
    console.log("sobrepesso")
}else if(IMC >= 18,5 && IMC <= 24,9){
    console.log("peso normal")
}else if(IMC < 18,5 ){
    console.log("baixo pesso")
}