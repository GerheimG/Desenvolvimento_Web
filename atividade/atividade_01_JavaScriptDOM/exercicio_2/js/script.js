document.addEventListener('DOMContentLoaded', function () {

    const numero = document.getElementById('numero')

    const botao = document.getElementById('verificar')

    botao.addEventListener('click', function() {

        const valor = Number(numero.value)

        if (valor > 0) {
            alert('Número Positivo');
        } else if (valor < 0) {
            alert('Número Negativo');
        } else {
            alert('Zero!');
        }
    });
});