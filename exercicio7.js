// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

let valor = 0.30
let macas = Number(prompt("Quantas maças gostaria de comprar? aparti de doze o valor de cada é 0,25."))
if(macas > 0 && macas < 12){
    console.log(`${macas} ficam ${(macas*valor).toFixed(2)}`)
}else if(macas >= 12){
    valor = 0.25
    console.log(`${macas} ficam ${(macas*valor).toFixed(2)}`)
}else{
    onsole.log(`Valor inválido`)
}
