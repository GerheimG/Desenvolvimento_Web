document.addEventListener('DOMContentLoaded', function() {

    const texto = document.getElementById('mensagem')

    const caracter = document.getElementById('caracter')

    texto.addEventListener('input', function() {
        const quantidade = texto.value.length;
        caracter.textContent = `Caracteres digitados : ${quantidade}`;
    });
});