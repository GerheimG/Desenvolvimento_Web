let arrayExemplo = ['Maçã', 'Banana', 'Laranja'];


//Push() : Adiciona um ou mais elementos ao final do array e retorna novo comprimento
document.getElementById('botao-push').addEventListener('click', function () {
    // copia do array original para nao modifica-lo diretamente
    // spread operator(...) para criar uma cópia do array
    let array = [...arrayExemplo];

    // Armazena o resultado do push(novo tamanho do array)
    let novoComprimento = array.push('Manga', 'Abacaxi');

    // resultado
    document.getElementById('resultado-push').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elementos adicionados:</strong> 'Manga', 'Abacaxi'<br>
    <strong>Novo comprimerto do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

//Pop(): Remove o ultimo elemento do array e retorna esse elemento
document.getElementById('botao-pop').addEventListener('click', function () {
    let array = [...arrayExemplo];
    // Remove e armazena o último elemento
    let elementoRemovido = array.pop();

    document.getElementById('resultado-pop').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento removido:</strong> "${elementoRemovido}"<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

//Unshift(): Adiciona um ou mais elementos no inicio do array e retonra o novo comprimento
document.getElementById('botao-unshift').addEventListener('click', function () {
    let array = [...arrayExemplo];
    //Adiciona elementos no inicio e armazena o novo tamanho
    let novoComprimento = array.unshift('Manga', 'Abacaxi');

    document.getElementById('resultado-unshift').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elementos adicionados:</strong> 'Manga', 'Abacaxi'<br>
    <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

//Shift(): Remove o primerio elemento do array e retorna esse elemento
document.getElementById('botao-shift').addEventListener('click', function () {
    let array = [...arrayExemplo];

    // remove e armazena
    let elementoRemovido = array.shift();

    document.getElementById('resultado-shift').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento removido:</strong> "${elementoRemovido}"<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

//Splice(): Altera o conbteudo de um array removendo, substituindo ou adicionando elementos
//parametro: indice inicial, quantidade a remover, elementos a adicionar
document.getElementById('botao-splice').addEventListener('click', function () {
    let array = [...arrayExemplo];

    //remove 1 elemento a partir do indice 1 e adiciona 'Kiwi' e 'Morango'
    let elementosRemovidos = array.splice(1, 1, 'Kiwi', 'Morango');

    document.getElementById('resultado-splice').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> array.splice(1, 1, 'Kiwi', 'Morango');<br>
    <strong>Elementos removidos:</strong> [${elementosRemovidos.join(', ')}]<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

//Slice(): Retorna uma copia de parte de um array e um novo array
// parametros: indice inicial (inclusivo), indice final (exclusivo)
document.getElementById('botao-slice').addEventListener('click', function () {
    // nao precisa de copia pois ele ja faz
    let novoArray = arrayExemplo.slice(1, 3);

    document.getElementById('resultado-slice').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> arrayExemplo.slice(1, 3);<br>
    <strong>Novo Array retornado:</strong> [${novoArray.join(', ')}]<br>
    <strong>Array original permanece inalterado:</strong> [${arrayExemplo.join(', ')}]
    `;
});