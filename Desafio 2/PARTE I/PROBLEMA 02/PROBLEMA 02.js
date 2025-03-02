//Crie um programa utilizando o loop "do...while" para solicitar a senha de acesso ao usuário. O usuário terá um limite de três tentativas para inserir a senha correta.
//a)      Se a senha for inserida corretamente dentro do limite de tentativas, exiba a mensagem: "Acesso concedido!"
//b)  	Caso contrário, exiba a mensagem: "Senha bloqueada!"
const prompt = require ('prompt-sync')();
let senhaCorreta = '89188234';  // Defina a senha correta
let tentativas = 0;
let senha;

do {
    senha = prompt('Digite a senha: ');
    tentativas++;

    if (senha === senhaCorreta) {
        console.log('Acesso concedido!');//(a)
        break; // Sai do loop se a senha estiver correta
    } else if (tentativas < 3) {
        console.log('Senha incorreta. Tente novamente.');
    }

} while (tentativas < 3);

if (tentativas === 3 && senha !== senhaCorreta) {
    console.log('Senha bloqueada!');//(b)
}
//@AndreMouraL