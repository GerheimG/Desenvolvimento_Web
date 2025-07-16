// Coleta das 4 notas via Prompt
let nota1 = parseFloat(prompt('Digite a primeira nota (0 a 10):'));
let nota2 = parseFloat(prompt('Digite a segunda nota (0 a 10):'));
let nota3 = parseFloat(prompt('Digite a terceira nota (0 a 10):'));
let nota4 = parseFloat(prompt('Digite a quarta nota (0 a 10):'));

// Cálculo da média
let media = (nota1 + nota2 + nota3 + nota4) / 4;


// Verificação da menção com condicionais
let mencao;

// Condicional
if (media >= 9) {
    mencao = 'Aprovado com Mérito';
} else if (media >= 7) {
    mencao = 'Aprovado';
} else if (media >= 5) {
    mencao = 'Recuperação'
} else {
    mencao = 'Reprovado'
}

// Exibição do resultado
console.log(`Média: ${media.toFixed(2)}`);

alert('Você foi ' + mencao)