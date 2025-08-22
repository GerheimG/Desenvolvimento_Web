document.addEventListener('DOMContentLoaded', function() {
    const numero = document.getElementById('entrada');
    const btnVerificar = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');


    btnVerificar.addEventListener('click', function() {
        const number = Number(numero.value);
        if (number % 2 === 0) {
            resultado.textContent = `${number} é par`
        } else {
            resultado.textContent = `${number} é ímpar`
        };
    });
});