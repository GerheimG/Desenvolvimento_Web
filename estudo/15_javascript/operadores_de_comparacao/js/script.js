let idade = prompt('Qual sua idade? ');
let temSenha = prompt('Você tem a senha de acesso? (sim/não) ');

// Conversão e limpeza de dados
idade = Number(idade);
temSenha = temSenha.toLocaleLowerCase();

// Verificação usando operadores de comparação e lógicos
if (idade >= 18 && temSenha == 'sim') {
    alert('Acesso Permitido!');
} else if (idade < 18 || temSenha == 'não') {
    alert('Acesso negado: idade insuficiente ou senha inválida.')
} else {
    alert('Dados inválidos. Tente novamente.')
}