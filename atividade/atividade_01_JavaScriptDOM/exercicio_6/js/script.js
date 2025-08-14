document.addEventListener('DOMContentLoaded', function() {

    const palavra = document.getElementById('palavra')

    const botaoVerificar = document.getElementById('verificar')

    botaoVerificar.addEventListener('click', function() {
        const texto = palavra.value.toLowerCase();
        const reverso = texto.split('').reverse().join('');

        if (texto === reverso) {
            alert('Palíndromo');
        } else {
            alert('Não é um palíndromo');
        }
    });
});