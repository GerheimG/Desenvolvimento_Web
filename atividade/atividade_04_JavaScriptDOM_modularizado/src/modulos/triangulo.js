export function verificarTriangulo (a, b, c, pTriangulo) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        pTriangulo.textContent = "coloque valores válidos"
    } else if (a + b > c || b + c > a || a + c > b) {
        pTriangulo.textContent = "É possivel fazer um triangulo"
    } else {
        pTriangulo.textContent = "Não possivel fazer um triangulo"
    }
}