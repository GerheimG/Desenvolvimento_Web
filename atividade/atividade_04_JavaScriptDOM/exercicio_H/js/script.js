document.addEventListener('DOMContentLoaded', function() {
    const btnCalcular = document.getElementById('calcular');
    const resultado = document.getElementById('resultado');
    const passo = document.getElementById('passo');

    btnCalcular.addEventListener('click', function() {
        // Coeficientes da equação x² - 6x + 5
        const a = 1;
        const b = -6;
        const c = 5;

        // Calculando delta
        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            resultado.textContent = "A equação não possui raízes reais.";
            passo.textContent = "";
            return;
        }

        // Calculando raízes usando Bhaskara
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        resultado.textContent = `As raízes da equação são: x' = ${x1}, x'' = ${x2}`;

        passo.innerHTML = `
        Passo a passo:<br>
        1. Identifique os coeficientes: a = ${a}, b = ${b}, c = ${c}<br>
        2. Calcule o delta: Δ = b² - 4ac = (${b})² - 4*${a}*${c} = ${delta}<br>
        3. Calcule as raízes: <br>
        x' = (-b + √Δ) / 2a = ${x1}<br>
        x'' = (-b - √Δ) / 2a = ${x2}
        `;
    });
});
