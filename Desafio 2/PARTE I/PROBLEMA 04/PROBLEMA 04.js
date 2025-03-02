//Solicite ao usuário cinco números, armazene-os em uma lista e, em seguida, exiba todos os números na tela.

const prompt = require('prompt-sync')();

// Função para garantir que o número digitado seja válido
function solicitarNumero(mensagem) {
    let numero;
    while (true) {
        numero = parseInt(prompt(mensagem));
        if (!isNaN(numero)) {
            return numero;  // Se for um número válido, retorna
        } else {
            console.log('Número inválido. Por favor, digite um número válido.');
        }
    }
}

// Criando a lista vazia
let numeros = [];

// Solicitando 5 números e armazenando na lista
numeros.push(solicitarNumero('Digite o primeiro número: '));
numeros.push(solicitarNumero('Digite o segundo número: '));
numeros.push(solicitarNumero('Digite o terceiro número: '));
numeros.push(solicitarNumero('Digite o quarto número: '));
numeros.push(solicitarNumero('Digite o quinto número: '));

// Exibindo todos os números
console.log("Os números digitados foram:");
for (let i = 0; i < 5; i++) {
    console.log(numeros[i]);
}

//@AndreMouraL