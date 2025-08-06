// Calcular o perímetro de um paralelepípedo
function calcularPerimetro(comprimento, largura) {
    return 2 * (comprimento + largura);
}

// Calcular a área de um paralelepípedo
function calcularArea(comprimento, largura, altura) {
    return 2 * (comprimento * largura + comprimento * altura + largura * altura);
}

const comprimento = 5;
const largura = 3;
const altura = 2;

const perimetro = calcularPerimetro(comprimento, largura);
const area = calcularArea(comprimento, largura, altura);

console.log('Paralelepípedo');
console.log(`Comprimento: ${comprimento}`);
console.log(`Largura: ${largura}`);
console.log(`Altura: ${altura}`);
console.log(`Perímetro: ${perimetro}`);
console.log(`Área: ${area}`);