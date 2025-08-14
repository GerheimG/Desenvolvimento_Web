// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function () {

    // Obtém a referência ao elemento <ul> com id 'saida'
    const ul = document.getElementById('saida');

    // Função que limpa o contéudo da lista (zera o innerHTML da <ul>)
    const limpar = () => ul.innerHTML = '';

    // Função que adiciona um <li> com texto dentro da <ul>
    const addItem = texto => {
        // Cria um novo elemento <li>
        const li = document.createElement('li');
        // Define o texto do <li>
        li.textContent = texto;
        // Adiciona o <li> como filho da <ul>
        ul.appendChild(li)
    };

    // Evento para o botão com id 'btnWhile'
    document.getElementById('btnWhile').addEventListener('click', function () {
        // Limpa a lista antes de começar
        limpar();
        // Inicializa a variavel de controle
        let i = 1;
        // Enquanto i for menor ou igual a 3
        while (i <= 3) {
            // Adiciona item com número atual
            addItem('While:' + i);
            i++;
        }
    });

    // Evento para o botão com id 'btnDoWhile'
    document.getElementById('btnDoWhile').addEventListener('click', function () {
        limpar();
        const senhaCorreta = '123';
        // Variavel para armazenar a entrada do usuario
        let tentiva;
        // Contador de tentativas
        let tentativas = 0;

        do {
            // Solicita a senha
            tentiva = promt('Digite a senha (tente 123): ');
            // Conta mais uma tentativa
            tentativas++;
            // Repee até a senha estar correta
        } while (tentiva != senhaCorreta);
        // Mostra resultado: Interpolação é feita com crase ``
        addItem(`Senha correta após ${tentativas} tentativa(s)!`);
    });

    // Evento para o botâo com id "btnFor"
    document.getElementById('btnFor').addEventListener('click', function() {
        limpar();
        for (let i = 1; i <= 5; i++) {
            // Adiciona item para cada número
            addItem('For:' + i);
        }
    });
});