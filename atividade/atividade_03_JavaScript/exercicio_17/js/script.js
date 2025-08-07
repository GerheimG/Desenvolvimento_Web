function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2)
    return imc
}

console.log(calcularIMC(70, 1.75).toFixed(2))  
console.log(calcularIMC(80, 1.80).toFixed(2))  
console.log(calcularIMC(60, 1.60).toFixed(2)) 