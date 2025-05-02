// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

let valor1 = Number(prompt("Digite um valor"))
let valor2 = Number(prompt("Digite outro valor"))

if(valor1 < valor2){
    console.log(`${valor2}, ${valor1}`)
}else{
    console.log(`${valor1}, ${valor2}`)
}