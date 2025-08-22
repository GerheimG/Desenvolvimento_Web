document.addEventListener('DOMContentLoaded', function() {
    const lado1 = document.getElementById('lado1');
    const lado2 = document.getElementById('lado2');
    const lado3 = document.getElementById('lado3');
    const btnVerificar = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    btnVerificar.addEventListener('click', function() {
        const a = Number(lado1.value);
        const b = Number(lado2.value);
        const c = Number(lado3.value);


        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
            resultado.textContent = "Informe valores válidos para todos os lados!";
            return;
        }


        if (a + b > c && a + c > b && b + c > a) {
            resultado.textContent = "Esses segmentos PODEM formar um triângulo!";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "Esses segmentos NÃO podem formar um triângulo.";
        }
    });
});
