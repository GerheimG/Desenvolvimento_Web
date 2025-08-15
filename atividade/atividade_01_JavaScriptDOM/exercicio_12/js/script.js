document.addEventListener('DOMContentLoaded', () => {
    const relogio = document.getElementById('temporizador');
    let valor = 10;
    relogio.textContent = valor;

    const intervalo = setInterval(() => {
        valor--;
        if (valor <= 0) {
            clearInterval(intervalo);
            relogio.textContent = 'Tempo esgotado!';
        } else {
            relogio.textContent = valor;
        }
    }, 1000);
});
