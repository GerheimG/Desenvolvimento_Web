document.addEventListener('DOMContentLoaded', function () {
    const numero = document.getElementById('numero');
    const botao = document.getElementById('botao');
    const mensagem = document.getElementById('mensagem');

    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;

    botao.addEventListener('click', function () {
        const palpite = Number(numero.value);
        tentativas++;

        if (palpite === numeroSecreto) {
            mensagem.textContent = `Você acertou! Número: ${numeroSecreto}. Tentativas: ${tentativas}`;
            botao.disabled = true;
        } else if (tentativas === 10) {
            mensagem.textContent = `Acabaram as tentativas! Número era ${numeroSecreto}`;
            botao.disabled = true;
        } else if (palpite < numeroSecreto) {
            mensagem.textContent = 'Tente um número maior.';
        } else {
            mensagem.textContent = 'Tente um número menor.';
        }

        numero.value = '';
        numero.focus();
    });
});
