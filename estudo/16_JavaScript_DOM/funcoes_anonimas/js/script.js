// Define uma função de saudação que recebe um nome como parâmetro
const saudacao = function (nome) {
    return `Olá, ${nome}! Seja Bem-vindo(a).`; // Retorna uma mensagem personalizada
};

// Função arrow que exibe a mensagem no elemento com id 'resultado'
const mostrarResultado = (mensagem) => {
    const resultadoElement = document.getElementById('resultado'); // Seleciona o elemento HTML

    resultadoElement.innerHTML = `<p>${mensagem}</p>`; // Insere a mensagem dentro de uma tag <p>
};

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    const saudarBtn = document.getElementById('saudar'); // Seleciona o botão de saudação
    const limparBtn = document.getElementById('limpar'); // Seleciona o botão de limpar

    const nome = document.getElementById('nome')

    // Adiciona um evento de clique ao botão de saudação
    saudarBtn.addEventListener('click', function () {
        const mensagem = saudacao(nome.value); // Chama a função saudacao com o nome 'João'
        mostrarResultado(mensagem); // Mostra a mensagem no HTML
    });

    // Adiciona um evento de clique ao botão de limpar
    limparBtn.addEventListener('click', () => {
        document.getElementById('resultado').innerHTML = ''; // Limpa o conteúdo do elemento 'resultado'
    });
});
