let meuArray = []


function inserirValor() {
    while(true) {
        let valor = prompt('Digite um valor para o array (Cancelar para sair): ');
        if (valor === null) {
            break; // Sai do loop
        } else if (valor.trim() !== '') {
            meuArray.push(valor);
            alert('Valor adicionado: ' + valor);
        } else {
            alert('Valor inválido. Tente novamente.');
        }
    }
}

inserirValor();
console.log('Valores inseridos:', meuArray)