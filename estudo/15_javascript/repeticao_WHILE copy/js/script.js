// Declara a variavel que armazenará a quantidade de números
let quantidade = 0;

// WHILE: continua pedindo até o usuário digitar um número inteiro positivo
while (true) {
    // Solicita ao usuário a quantidade de números que ele quer cadastrar
    let entrada = prompt("Quantos números você deseja cadastrar? ");

    // Converte a entrada para número inteiro
    quantidade = parseInt(entrada);

    // Verifica se é um número inteiro e maior que zero
    if (!isNaN(quantidade) && quantidade > 0) {
        break; // Se for válido, sai do loop
    } else {
        // Caso contrário, exibe uma mensagem de erro
        alert("Por favor, digite um número inteiro positivo.");
    }
}

// Cria um array para armazenar os números digitados
let numeros = [];

// Variável para armazenar a soma dos números (para cálculo da média)
let soma = 0;

// FOR: loop que executa exatamente 'quantidade' vezes
for (let i = 0; i < quantidade; i++) {
    // Variável de controle para validar a entrada
    let numeroValido = false;

    // WHILE interno: repete até que o usuário digite um número válido
    while (!numeroValido) {
        // Pede ao usuário o número correspondente
        let entradaNumero = prompt(`Digite o número ${i + 1}:`);

        // Converte para número real
        let numero = parseFloat(entradaNumero);

        // Verifica se é um número válido (não NaN)
        if (!isNaN(numero)) {
            // Adiciona ao array
            numeros.push(numero);

            // Soma o número (para média depois)
            soma += numero;

            // Marca como válido para sair do WHILE
            numeroValido = true;
        } else {
            // Alerta em caso de valor inválido
            alert("Valor inválido. Digite um número válido.");
        }
    }
}

// Exibe todos os números digitados no console
console.log('Números digitados: ');
for (let i = 0; i < numeros.length; i++) {
    console.log(`- ${numeros[i]}`);
}

// Calcula a média
let media = soma / quantidade;

// Exibe a média no console
console.log(`Média dos números: ${media}`);

// Alerta final ao usuário (o resultado completo está no console)
alert("Cadastro concluído!\nVeja o console (F12) para os resultados.")