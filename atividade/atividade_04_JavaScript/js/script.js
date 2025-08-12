// Registro inicial de produtos
let produtos = [
    { nome: 'Banana', preco: 30, quantidade: 10 },
    { nome: 'Pastel', preco: 25, quantidade: 30 },
    { nome: 'Caldo', preco: 10, quantidade: 12 }
];

// Função principal com o menu de opções
function menuPrincipal() {
    // Solicita a escolha do usuário via prompt
    let escolha = prompt('Escolha uma das Opções\n 1- Ver Produtos\n2- Adicionar Produtos\n3- Remover Produto\n0- Sair');

    if (escolha === '1') {  // Se escolher ver produtos
        exibirProdutos();
    } else if (escolha === '2') {  // Se escolher adicionar produto
        adicionarProdutos();
    } else if (escolha === '3') {  // Se escolher remover produto
        removerProduto();
    } else if (escolha === '0') {  // Se escolher sair
        alert('Saindo do Sistema');
        return;  // Encerra a função e sai do programa
    } else {  // Caso escolha inválida
        alert('Opção inválida! Tente novamente.');
        menuPrincipal();  // Reexibe o menu
    }
}

// Função para adicionar produtos via prompt
function adicionarProdutos() {
    while (true) {  // Loop para adicionar vários produtos até o usuário cancelar
        // Solicita o nome do produto
        let nome = prompt('Digite o nome do produto (ou clique em "Cancelar" para voltar):');
        if (nome === null) break;  // Sai do loop se usuário clicar cancelar

        nome = nome.trim();  // Remove espaços extras no começo/fim
        if (nome === '') {  // Verifica se o nome está vazio
            alert('Nome inválido. Tente novamente.');
            continue;  // Volta para o início do loop para tentar de novo
        }

        // Solicita o preço do produto
        let preco = prompt(`Digite o preço do(a) ${nome}:`);
        if (preco === null) break;  // Sai se cancelar

        preco = preco.trim();
        // Verifica se preço é vazio ou não é número
        if (preco === '' || isNaN(preco)) {
            alert('Preço inválido. Tente novamente.');
            continue;  // Repete a entrada
        }
        preco = Number(preco);  // Converte para número

        // Solicita a quantidade do produto
        let quantidade = prompt(`Digite a quantidade do(a) ${nome}:`);
        if (quantidade === null) break;  // Sai se cancelar

        quantidade = quantidade.trim();
        // Verifica se quantidade é vazio ou não é número
        if (quantidade === '' || isNaN(quantidade)) {
            alert('Quantidade inválida. Tente novamente.');
            continue;  // Repete a entrada
        }
        quantidade = Number(quantidade);  // Converte para número

        // Cria um novo objeto produto com os dados coletados
        let novoProduto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        };

        produtos.push(novoProduto);  // Adiciona o novo produto ao array
        alert(`Produto "${nome}" adicionado com sucesso!`);
    }

    // Retorna ao menu após sair do loop
    menuPrincipal();
}

// Função para exibir todos os produtos no console
function exibirProdutos() {
    console.clear();  // Limpa o console antes de exibir
    console.log('Lista de Produtos:');
    produtos.forEach(function(produto, indice) {
        console.log(`Produto ${indice + 1}:`);
        console.log(`- Nome: ${produto.nome}`);
        console.log(`- Preço: R$ ${produto.preco}`);
        console.log(`- Quantidade: ${produto.quantidade}`);
        console.log('--------------------------');
    });

    // Espera um pequeno tempo antes do alert para garantir que os logs apareçam
    setTimeout(() => {
        alert('Lista de produtos exibida no console (F12 > Console).');
        menuPrincipal();  // Retorna ao menu
    }, 100);
}

// Função para remover um produto pelo índice
function removerProduto() {
    // Solicita o número do produto que deseja remover
    let entrada = prompt('Digite o número do produto que deseja remover (1, 2, 3...) ou clique Cancelar para sair:');
    if (entrada === null) {
        menuPrincipal();  // Volta ao menu se cancelar
        return;
    }

    let indice = Number(entrada) - 1;  // Ajusta para índice do array (começa em 0)

    // Verifica se o índice é válido
    if (isNaN(indice) || indice < 0 || indice >= produtos.length) {
        alert('Índice inválido.');
        removerProduto();  // Tenta de novo
        return;
    }

    produtos.splice(indice, 1);  // Remove o produto do array
    alert('Produto removido com sucesso.');
    menuPrincipal();  // Retorna ao menu
}

// Inicia o programa chamando o menu principal
menuPrincipal();
