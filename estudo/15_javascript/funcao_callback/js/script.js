// Simula o carregamento de dados (assíncrono com setTimeout)
function carregarDados(callback) {
    console.log('...Carregando dados...');

    /*
    O setTimeout() serve para executar uma função depois de um tempo determinado - ou seja,
    ele agenda a execução de algo no futuro, sem travar o restante do código.
    Sintaxe: setTimeout(funcao, tempoEmMilissegundos);
    */

    setTimeout(() => {
        const dados = ['Agata', 'Coly', 'Isis'];
        console.log('- Dados carregados.');
        callback(dados); //Chama o callback com os dados
    }, 3000);
}

// Função callback que processa os dados recebidos
function exibirDados(lista) {
    console.log('- Lista de nomes:');
    lista.forEach((nome, indice) => {
        console.log(`${indice + 1}. ${nome}`);
    });
}

// Executando
carregarDados(exibirDados);