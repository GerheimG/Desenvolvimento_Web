export function calcularAnoBissexto(vBissexto, pBissexto) {
    if ((vBissexto % 4 === 0 && vBissexto % 100 !== 0) || (vBissexto % 400 === 0)) {
        pBissexto.textContent = `${vBissexto} é um ano bissexto.`;
    } else {
        pBissexto.textContent = `${vBissexto} não é um ano bissexto.`;
    }
}