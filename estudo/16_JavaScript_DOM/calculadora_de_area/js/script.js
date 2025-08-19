// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão com o id 'calcularBtn'
    const botao = document.getElementById('calcularBtn');

    // Adiciona um ouvinte de evento para o clique no botão
    botao.addEventListener('click', () => {
        // Seleciona o campo de entrada com o id 'ladoInput'
        const input = document.getElementById('ladoInput');
        // Converte o valor digitado no input para número decimal
        const lado = parseFloat(input.value);

        // Verifica se o valor é inválido (NaN ou menor/igual a zero)
        if (isNaN(lado) || lado <= 0) {
            // Exibe mensagem de erro
            mostrarMensagem('Por favor, insira um valor válido maior que zero.');
            return; // Interrompe a execução da função
        }

        // Calcula a área do quadrado com base no valor do lado
        const area = calcularAreaQuadrado(lado);
        // Exibe o resultado formatado
        mostrarMensagem(`A área do quadrado com lado ${lado} é: ${area}`);
    });
});

// Função que calcula a área do quadrado
function calcularAreaQuadrado(lado) {
    return lado * lado; // Retorna lado ao quadrado
}

// Função que exibe uma mensagem no elemento com id 'resultado'
function mostrarMensagem(texto) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto; // Define o conteúdo de texto da div
}
