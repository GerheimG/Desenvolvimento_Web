const calcularHipotenusa = function(catetoOP, catetoAD) {
    return Math.sqrt(Math.pow(catetoOP, 2) + Math.pow(catetoAD, 2));
};

const calcularPerimetro = function(base, altura) {
    const h = calcularHipotenusa(catetoOP, catetoAD);
    return catetoOP + catetoAD + h
};

const calcularAreaTriangulo = function(base, altura) {
    return (base * altura) / 2;
};

const catetoOP = 3;
const catetoAD = 4;

const hipotenusa = calcularHipotenusa(catetoOP, catetoAD);
const perimetro = calcularPerimetro(catetoOP, catetoAD);
const area = calcularAreaTriangulo(catetoOP, catetoAD);

console.log('Triângulo Retângulo');
console.log(`Cateto Oposto: ${catetoOP}`);
console.log(`Cateto Adjacente: ${catetoAD}`);
console.log(`Hipotenusa: ${hipotenusa.toFixed(2)}`);
console.log(`Perímetro: ${perimetro.toFixed(2)}`);
console.log(`Cálculo da Área: ${area}`);