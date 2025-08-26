export function calcularPassagem(kmPassagem, pPassagem) {
    let valorPassagem = 0;
    if (isNaN(kmPassagem) || kmPassagem <= 0) {
        pPassagem.textContent = "Digite um valor válido";
    } else if (kmPassagem <= 200) {
        valorPassagem = kmPassagem * 0.70
        pPassagem.innerHTML = `
        Distância de ${kmPassagem}km a passagem vai custar R$${valorPassagem.toFixed(2)}
        `
    } else {
        valorPassagem = kmPassagem * 0.40
        pPassagem.innerHTML = `
        Distância de ${kmPassagem}km a passagem vai custar R$${valorPassagem.toFixed(2)}
        `
    }}