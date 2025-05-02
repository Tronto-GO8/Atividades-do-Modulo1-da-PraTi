// Para saber como executar o código leia o arquivo read_me primeiro.
const prompt = require("prompt-sync")()
// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

let cardapio = prompt("Temos três opções de cardápio, vegetariano, vegano e o normal. Qual gostaria? ")

switch (cardapio){ 
    case 'vegetariano':
        console.log("Aqui está o cardápio vegetariano. Eu recomento os canápes de ovas de salmão. Bom jantar");
        break;
    case 'vegano':
        console.log("Aqui está o cardápio vegano. Eu recomento o hiacsoba. Bom jantar");
        break;
    case 'normal':
        console.log("Aqui está o cardápio pradão. Eu recomendaria qualquer um dos sushis. Bom jantar");
        break;
    default:
        console.log("Infelizmente só temos esses opções de cardápio");
}