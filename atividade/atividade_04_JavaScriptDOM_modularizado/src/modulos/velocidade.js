export function verificarVelocidade (vVelocidade, pVelocidade) {
    if (isNaN(vVelocidade)) {
        pVelocidade.textContent = "Digite um número válido!"
    } else if (vVelocidade < 60) {
        pVelocidade.textContent = "Você está dentro do limite de velocidade!"
    } else {
        pVelocidade.textContent = "Você está fora do limite de velocidade! O limite é 60km/h"
    }
}