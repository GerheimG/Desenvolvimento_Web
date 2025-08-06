/*
Um carro de massa 1.200 kg trafega por uma estrada reta a uma velocidade constante de 25 m/s.
Calcule a energia cinética do carro nesse momento. Se o carro dobrar sua velocidade para 50 m/s,
qual será sua nova cinética? O que isso mostra sobre a relação entre
velocidade e energia cinética?
*/

// Arrow function para calcular energia cinética
const calcularEnergiaCinetica = (massa, velocidade) => 0.5 * massa * (Math.pow(velocidade, 2));

// Dados fornecidos
const massa = 1200; // em kg
const velocidadeInicial = 25; // em m/s
const velocidadeFinal = 50; // em m/s

// Cálculo da energia cinética nas duas velocidades
const energiaInicial =  calcularEnergiaCinetica(massa, velocidadeInicial);
const energiaFinal = calcularEnergiaCinetica(massa, velocidadeFinal);

// Exibindo os resultados
console.log('Energia cinética com 25 m/s:', energiaInicial, 'Joules');
console.log('Energia cinética com 50 m/s:', energiaFinal, 'Joules');

// Análise da relação entre velocidade e energia
console.log('A energia cinética quadruplicou quando a velocidade dobrou.');
console.log('Isso mostra que a energia cinética é proporcional ao quadrado da velocidade.')