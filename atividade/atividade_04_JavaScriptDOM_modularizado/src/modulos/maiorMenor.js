export function calcularMaiorMenor(a, b, c, resultado) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.textContent = "Preencha os campos com números válidos.";
    } else if (a === b && b === c) {
        resultado.textContent = "Os numeros são iguais!"
    } else {
        const maior = Math.max(a, b, c);
        const menor = Math.min(a, b, c);
        resultado.innerHTML = `O maior número é ${maior}<br>E o menor número é ${menor}`;
    }
    
}
    