//Crie uma função que receba um nome como parâmetro e retorne uma mensagem personalizada no seguinte formato: "Olá, (nome), que bom ter você no programa Trilhas."

function mensagemPersonalizada(nome) {
    // Criando a mensagem usando template literals
    const mensagem = `Olá, ${nome}, que bom ter você no programa Trilhas.`;
    
    // Retornando a mensagem
    return mensagem;
}

// Testando a função com diferentes nomes
console.log(mensagemPersonalizada("André Moura"));
//@AndreMouraL