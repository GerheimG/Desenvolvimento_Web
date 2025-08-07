numero = prompt("Digite um número inteiro: ");

function Par (numero) {
    if (numero === null || numero.trim() === '' || isNaN(Number(numero))) {
        alert('Inválido! Digite um número.');
    } else {
        numero = Number(numero); // converte para número
        if (numero % 2 === 0) {
            console.log("Este número é par");
            return true
        } else {
            console.log("Este número é impar");
            return false
        }
        }
    }

let funcao = Par(numero);

console.log(funcao);