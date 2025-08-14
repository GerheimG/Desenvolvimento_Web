document.addEventListener('DOMContentLoaded', function() {

    const primeiro = document.getElementById('primeiroValor');

    const segundo = document.getElementById('segundoValor');

    const botaoSoma = document.getElementById('soma');

    const botaoSubtrair = document.getElementById('subtrair');

    const botaoMulti = document.getElementById('multi');

    const botaoDividir = document.getElementById('dividir');

    botaoSoma.addEventListener('click', function() {
        const valor1 = Number(primeiro.value);
        const valor2 = Number(segundo.value);
        const resultado = valor1 + valor2;

        alert('Resultado:' + resultado)
    });

    botaoSubtrair.addEventListener('click', function() {
        const valor1 = Number(primeiro.value);
        const valor2 = Number(segundo.value);
        const resultado = valor1 - valor2;

        alert('Resultado:' + resultado)
    });

    botaoMulti.addEventListener('click', function() {
        const valor1 = Number(primeiro.value);
        const valor2 = Number(segundo.value);
        const resultado = valor1 * valor2;

        alert('Resultado:' + resultado)
    });

    botaoDividir.addEventListener('click', function() {
        const valor1 = Number(primeiro.value);
        const valor2 = Number(segundo.value);
        const resultado = valor1 / valor2;

        alert('Resultado:' + resultado)
    });
});