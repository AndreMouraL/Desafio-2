//Utilize o comando de repetição “while”, para solicitar que o usuário informe um número. O programa deve continuar executando até que o usuário digite o número 3, momento em que deverá se encerrar.
const prompt = require('prompt-sync')();

let numero;

while (true) { // Loop infinito
    numero = parseInt(prompt('Digite um número (3 para sair):'));

    //if (isNaN(numero)) {
       // console.log('Por favor, digite um número válido.');
       // continue; // Volta para o início do loop
    //}

    if (numero === 3) {
        console.log('Programa encerrado.');
        break; // Sai do loop
    }

    console.log(`Você digitou: ${numero}`);
}
//@AndreMouraL