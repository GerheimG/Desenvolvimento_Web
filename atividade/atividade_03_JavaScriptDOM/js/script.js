const produtos = [
    { nome: 'Sabonete Natural', preco: 15.0, categoria: 'cosmetico' },
    { nome: 'Shampoo Orgânico', preco: 25.0, categoria: 'cosmetico' },
    { nome: 'Granola Artesanal', preco: 18.5, categoria: 'alimento' },
    { nome: 'Mel Puro', preco: 22.0, categoria: 'alimento' }
];

document.addEventListener('DOMContentLoaded', function () {
    // mostrando todos os produtos na tela
    mostrarProdutos(produtos);

    const categoria = document.getElementById('filtro'); // pega o select de filtro por categoria

    categoria.addEventListener('change', function () { // <----------------------
        const categoriaEscolhida = categoria.value; //                           |
        //                                                                       |
        if (categoriaEscolhida === 'todos') { //                                 |
            mostrarProdutos(produtos); //                                        |
        } else { //                                                              |
            const produtoFiltrado = produtos.filter(function (produto) { //      |
                return produto.categoria === categoriaEscolhida; //              |
            });                                         //                       |
            // aqui mostra o produto dependendo da categoria que escolheu aqui---
            mostrarProdutos(produtoFiltrado);
        }
    });
});

// mostrando os produtos
function mostrarProdutos(listaProdutos) {
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // limpa o conteúdo anterior

    // percorre a lista e adiciona cada produto no HTML
    listaProdutos.forEach(function (produto) {
        lista.innerHTML += `<p><strong>${produto.nome} - R$ ${produto.preco.toFixed(2)}</strong></p>`;
    });

    const total = calcularTotal(listaProdutos); // calcula o total dos produtos exibidos
    const totalpreco = document.getElementById('total');
    totalpreco.textContent = `Total: R$ ${total.toFixed(2)}`; // mostra o total no HTML
}

// calculo do total 
function calcularTotal(listaProdutos) {
    return listaProdutos.reduce(function (total, produto) {
        return total + produto.preco; // soma o preço de cada produto ao total
    }, 0);
}

