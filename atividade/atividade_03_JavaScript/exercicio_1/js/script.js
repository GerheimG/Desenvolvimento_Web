function calculoMedia (lista) {
    let soma = 0;
    for(let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    media = soma / lista.length;
    console.log(`A média dos números é ${media}`)
}
let lista = [7, 8, 10];
calculoMedia(lista);