// Conversão implícita
let resultado1 = '5' + 3;         // '53' (número vira string)
let resultado2 = '10' - 2;        // 8 (string vira número)

// Conversão explícita
let numero = Number('123');       // 123 (string para número)
let texto = String(456);          // '456' (número para string)
let verdadeiro = Boolean(1);      // true (1 é convertido para booleano)

let valor1 = '123abc';
let n1 = parseInt(valor1); // 123 Funciona
let n2 = Number(valor2); // NaN Falha

let valor2 = '45.67';
let n3 = parseInt(valor2); // 45 Apenas parte inteira
let n4 = Number(valor2); // 45.67 Número completo (float)

console.log('let resultado1:', resultado1);
console.log('let resultado2:', resultado2);

console.log('let numero:', numero);
console.log('let texto:', texto);