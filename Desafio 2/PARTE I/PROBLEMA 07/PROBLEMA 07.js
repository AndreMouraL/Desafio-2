//Crie uma função chamada calcularQuadrado que receba um número como parâmetro e retorne o quadrado desse número.
// Função que valida a entrada e calcula o quadrado
function calcularQuadrado(numero) {
    // Verifica se o valor fornecido é um número
    if (isNaN(numero)) {
        return "Erro: Por favor, digite um número válido.";
    } else {
        // Calcula e retorna o quadrado do número
        return numero * numero;
    }
}

// Testando a função com entradas válidas e inválidas
console.log(calcularQuadrado(5));   // Exibe 25
//console.log(calcularQuadrado("a")); // Exibe erro: "Erro: Por favor, digite um número válido."

//@AndreMouraL