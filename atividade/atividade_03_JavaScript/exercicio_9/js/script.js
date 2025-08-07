function executarOperacao(valor1, valor2, callback) {
    const resultado = callback(valor1, valor2)
    console.log(`${valor1} + ${valor2} é igual a: ${resultado}`);
}

function conta(a, b) {
    return a + b;
}

executarOperacao(1, 2, conta);