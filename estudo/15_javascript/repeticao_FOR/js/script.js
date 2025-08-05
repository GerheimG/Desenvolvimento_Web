let entrada = prompt('Entre com o contador: ')

// Verifica se a entrada é válida
if (entrada === null || entrada.trim() === '' || isNaN(Number(entrada))) {
    alert('Entrada inválida! Digite um número.');
} else {
    let cont = Number(entrada); //Converte para número
    for (let c = 0; c < 5; c++) {
        console.log(`Contador do for = ${c} || Var controladora = ${cont}`);
    }
}