// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let numero
let soma = 0  
let media = -1
while(numero != 0 ){
    numero = Number(prompt("Digite um numero: "))
    soma += numero
    media ++
}

console.log(`A média de todos os número escrito é ${(soma/media).toFixed(2)}`)