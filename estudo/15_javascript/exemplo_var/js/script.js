// Exemplo com VAR//
var saudacao = 'Olá';
var saudacao = 'Oi'; //var permite redeclração
console.log('var:', saudacao) //Resultado: Oi

// Exemplo com LET
let nome = 'João';
// let nome = 'Maria'; ERRO: não pode redeclarar com let no mesmo escopo
nome = 'Carlos'; // Pode reatribuir valor
console.log('let:' , nome); //Resultado: Carlos

// Exemplo com CONST
const anoNascimento = 1990;
// anoNascimento = 2000; ERRO: não pode reatribuir valor a const
console.log('const:', anoNascimento); //Resultado: 1990

//Demonstrando escopo de let e var
if (true) {
    var linguagem1 = 'JavaScript (com var)';
    let linguagem2 = 'JavaScript (com let)';
}

console.log('Fora do bloco if:');
console.log('var linguagem1:', linguagem1) //Funciona
//console.log('let linguagem2:', linguagem2); ERRO: linguagem2 não existe fora do bloco