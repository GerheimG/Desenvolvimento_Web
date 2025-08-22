document.addEventListener('DOMContentLoaded', function(){
    const numero1 = document.getElementById('num1');
    const numero2 = document.getElementById('num2');
    const numero3 = document.getElementById('num3');
    const btnVerificar = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    btnVerificar.addEventListener('click', function(){
        const n1 = Number(numero1.value);
        const n2 = Number(numero2.value);
        const n3 = Number(numero3.value);

        if (n1 === n2 && n2 === n3) {
            resultado.textContent = "Todos os números são IGUAIS.";
        } else {
            let maior = Math.max(n1,n2,n3);
            let menor = Math.min(n1,n2,n3);
            resultado.textContent = `Maior ${maior} : Menor ${menor}`;
        };
    });
});