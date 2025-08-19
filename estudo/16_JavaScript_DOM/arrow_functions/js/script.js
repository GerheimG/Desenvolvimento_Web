document.addEventListener('DOMContentLoaded', function () {
    const btnDobro = document.getElementById('btnDobro');
    const btnTriplo = document.getElementById('btnTriplo');
    const valor = document.getElementById('numero')
    const resultado = document.getElementById('resultado');


    
    btnDobro.addEventListener('click', () => {
        const numero = Number(valor.value);
        const calculo = numero * 2;
        resultado.innerHTML = `Dobro: ${calculo}`;
    });

    btnTriplo.addEventListener('click', () => {
        const numero = Number(valor.value);
        const calculo = numero * 3;
        resultado.innerHTML = `Triplo: ${calculo}`
    });
});