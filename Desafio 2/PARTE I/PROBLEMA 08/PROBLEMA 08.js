//Crie uma função chamada Subtracao que receba dois números como parâmetros e retorne o resultado da subtração entre eles.
const prompt = require('prompt-sync')();

// Função que valida a entrada e retorna o resultado da subtração
function Subtracao(num1, num2) {
    // Verifica se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
        return "Erro: Por favor, digite números válidos.";
    } else {
        // Retorna o resultado da subtração
        return num1 - num2;
    }
}

// Solicitando os números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));

// Exibindo o resultado da subtração ou erro
console.log(Subtracao(numero1, numero2));

//@AndreMouraL