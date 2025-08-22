document.addEventListener('DOMContentLoaded', function () {
    const distancia = document.getElementById('distancia');
    const btnCalcular = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    btnCalcular.addEventListener('click', function () {
        let km = Number(distancia.value);

        if (isNaN(km) || km <= 0) {
            resultado.textContent = "Por favor, informe uma distância válida!";
            resultado.style.color = "red";
            return;
        }

        let preco;
        if (km <= 200) {
            preco = km * 0.7;
        } else {
            preco = km * 0.4;
        }

        resultado.textContent = `O preço da passagem é R$ ${preco.toFixed(2)}`;
    });
});
