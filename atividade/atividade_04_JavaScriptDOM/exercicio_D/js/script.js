document.addEventListener('DOMContentLoaded', function() {
    const salario = document.getElementById('dinheiro');
    const btnVerificar = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    btnVerificar.addEventListener('click', function() {
        let sal = Number(salario.value);

        if (isNaN(sal) || sal <= 0) {
            resultado.textContent = `O valor ${salario.value} não é um número válido`;
        } 
        else if (sal < 1000) {
            sal *= 1.10;
            resultado.textContent = `Salário atualizado: ${sal.toFixed(2)}`;
        } 
        else if (sal > 1500) {
            sal *= 1.05;
            resultado.textContent = `Salário atualizado: ${sal.toFixed(2)}`;
        } 
        else {
            resultado.textContent = `O seu salário continuará o mesmo: ${sal.toFixed(2)}`;
        }
    });
});
