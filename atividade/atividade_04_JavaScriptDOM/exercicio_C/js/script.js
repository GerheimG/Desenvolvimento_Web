document.addEventListener('DOMContentLoaded', function () {
    const velocidade = document.getElementById('velocidade');
    const btnVerificar = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    btnVerificar.addEventListener('click', function () {
        const velo = velocidade.value;

        if (velo <= 60) {
            resultado.textContent = `Você está dentro do limite de 60Km/h`;
        } else {
            resultado.textContent = `Você ultrapassou o limite de 60Km/h`;
        }
    });
});
