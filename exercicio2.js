// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync") ()

//  2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,//
//   adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//   controle if-else.
let idade = prompt("Qual sua ideda? ")

if(idade < 14){
    console.log("Você é uma criança, avida é triste e boa ao mesmo tempo, viva tudo que puder")
} else if(idade >= 15 && idade <= 20){
    console.log("Você é um adolecente, a puberdade é uma droga se você não tiver ninguém, mas da para sobreviver")
}else if(idade > 20 && idade <= 50){
    console.log("Você é um adulto, já sabe como o jogo funciona...eu acho. Boa vida")
}else if(idade > 50 ){
    console.log("Aproveite o tempo que lhe resta fazendo o que ama e com quem ama")
}