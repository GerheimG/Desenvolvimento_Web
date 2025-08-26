export function calcularParImpar(a, p) {  
    if (isNaN(a)) {
        p.textContent = "Digite um número!"
    } else if (a % 2 === 0) {
        p.textContent = `${a} é par`
    } else {
        p.textContent = `${a} é ímpar`
    }
}