let escolha = prompt('Escolha uma das opções: \n1- Somar\n2- Subtrair\n3- Multiplicar\n4- Dividir\n5- Resto da divisão\n6- Perímetro de alguma forma')

let resultado;
let n1;
let n2;

if (escolha == '1') {
    n1 = Number(prompt('Esolha o primeiro número inteiro: '));
    n2 = Number(prompt('Esolha o segundo número inteiro: '));
    if (isNaN(n1) || isNaN(n2)) {
        alert('Você digitou um valor inválido!')
    } else {
    resultado = n1 + n2;
    alert('O resultado é: '+  resultado);
    }
} else if (escolha == '2') {
    n1 = Number(prompt('Esolha o primeiro número inteiro: '));
    n2 = Number(prompt('Esolha o segundo número inteiro: '));
    if (isNaN(n1) || isNaN(n2)) {
        alert('Você digitou um valor inválido!')
    } else {
    resultado = n1 - n2;
    alert('O resultado é: '+  resultado);
    }
} else if (escolha == '3') {
    n1 = Number(prompt('Esolha o primeiro número inteiro: '));
    n2 = Number(prompt('Esolha o segundo número inteiro: '));
    if (isNaN(n1) || isNaN(n2)) {
        alert('Você digitou um valor inválido!')
    } else {
    resultado = n1 * n2;
    alert('O resultado é: '+  resultado);
    }
} else if (escolha == '4') {
    n1 = Number(prompt('Esolha o primeiro número inteiro: '));
    n2 = Number(prompt('Esolha o segundo número inteiro: '));
    if (isNaN(n1) || isNaN(n2)) {
        alert('Você digitou um valor inválido!')
    } else {
    resultado = n1 / n2;
    alert('O resultado é: '+  resultado,);
    }
} else if (escolha == '5') {
    n1 = Number(prompt('Esolha o primeiro número inteiro: '));
    n2 = Number(prompt('Esolha o segundo número inteiro: '));
    if (isNaN(n1) || isNaN(n2)) {
        alert('Você digitou um valor inválido!')
    } else {
    resultado = n1 % n2;
    alert('O resultado é: '+  resultado);
    }
} else if (escolha == '6') {
    forma = prompt('Qual forma? \nTriângulo \nRetângulo').trim().toLowerCase()
    if (forma == 'triângulo') {
        lado1 = parseFloat(prompt('Insira o valor do lado 1: '));
        lado2 = parseFloat(prompt('Insira o valor do lado 2: '));
        lado3 = parseFloat(prompt('Insira o valor do lado 3: '));
        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert('Você digitou um valor inválido!')
        } else {
        perimetro = lado1 + lado2 + lado3;
        resultado = perimetro;
        alert('O resultado é: '+  resultado);
        }
    } else if (forma == 'retângulo') {
        lado1 = parseFloat(prompt('Insira o valor do lado 1: '));
        lado2 = parseFloat(prompt('Insira o valor do lado 2: '));
        if (isNaN(lado1) || isNaN(lado2)) {
        alert('Você digitou um valor inválido!')
        } else {
            if (lado1 == lado2) {
            alert('Isso é um quadrado!');
        }
        perimetro = (2 * lado1) + (2 * lado2); 
        resultado = perimetro;
        alert('O resultado é: '+  resultado);
        }
    }
}

