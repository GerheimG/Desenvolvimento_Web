let anoNascimento = Number(prompt('Insira sua data de nascimento: '));

let anoCorrente = new Date().getFullYear();

let idade = anoCorrente - anoNascimento;

console.log('idade', idade);