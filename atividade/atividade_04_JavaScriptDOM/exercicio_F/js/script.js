document.addEventListener('DOMContentLoaded', function() {
    const anoInput = document.getElementById('ano');
    const btnVerificar = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    btnVerificar.addEventListener('click', function() {
        const ano = Number(anoInput.value);

        if (isNaN(ano) || ano <= 0) {
            resultado.textContent = "Digite um ano válido!";
            return;
        }

        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            resultado.textContent = `O ano ${ano} é bissexto!`;
        } else {
            resultado.textContent = `O ano ${ano} não é bissexto.`;
        }
    });
});