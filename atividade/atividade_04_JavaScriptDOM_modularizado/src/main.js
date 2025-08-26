import { calcularParImpar } from './modulos/parImpar.js';
import { calcularMaiorMenor } from './modulos/maiorMenor.js';
import { calcularAnoBissexto } from './modulos/anoBissexto.js';
import { calcularPassagem } from './modulos/passagem.js';
import { verificarVelocidade } from './modulos/velocidade.js';
import { verificarSalario } from './modulos/salario.js';
import { verificarTriangulo } from './modulos/triangulo.js';
import { calcularEquacao } from './modulos/equacao.js';


document.getElementById("btnEquacao").addEventListener('click', () => {
    const ids = ["input-equacaoA", "input-equacaoB", "input-equacaoC"];
    const vEquacao = ids.map(id => parseFloat(document.getElementById(id).value));
    const pEquacao = document.getElementById("resultado-equacao")
    calcularEquacao(vEquacao[0], vEquacao[1], vEquacao[2], pEquacao)
})

document.getElementById("btnParImpar").addEventListener('click', () => {
    const numeroParImpar = document.getElementById("par-impar");
    const pParImpar = document.getElementById("resultado-par-impar")
    const valorParImpar = parseInt(numeroParImpar.value);
    calcularParImpar(valorParImpar, pParImpar)
})

document.getElementById("btnMaiorMenor").addEventListener('click', () => {
    const ids = ["input-maior-menor1", "input-maior-menor2", "input-maior-menor3"];
    const vMaiorMenor = ids.map(id => parseFloat(document.getElementById(id).value));
    const pMaiorMenor = document.getElementById("resultadoMaiorMenor")
    calcularMaiorMenor(vMaiorMenor[0], vMaiorMenor[1], vMaiorMenor[2], pMaiorMenor)

})

document.getElementById("btnVelocidade").addEventListener('click', () => {
    const nVelocidade = document.getElementById("input-velocidade");
    const vVelocidade = parseFloat(nVelocidade.value);
    const pVelocidade = document.getElementById("resultado-velocidade")
    verificarVelocidade(vVelocidade, pVelocidade);
})

document.getElementById("btnSalario").addEventListener('click', () => {
    const nSalario = document.getElementById("input-salario");
    const vSalario = parseFloat(nSalario.value);
    const pSalario = document.getElementById("resultado-salario")
    verificarSalario(vSalario, pSalario) 
})

document.getElementById("btnAno").addEventListener('click', () => {
    const nBissexto = document.getElementById("input-ano");
    const vBissexto = parseFloat(nBissexto.value);
    const pBissexto = document.getElementById("resultado-bissexto")
    calcularAnoBissexto(vBissexto, pBissexto)
})

document.getElementById("btnPassagem").addEventListener('click', () => {
    const nPassagem = document.getElementById("input-passagem");
    const kmPassagem = parseFloat(nPassagem.value);
    const pPassagem = document.getElementById("resultado-passagem")
    calcularPassagem(kmPassagem, pPassagem)
})

document.getElementById("btnTriangulo").addEventListener('click', () => {
    const ids = ["input-trianguloA", "input-trianguloB", "input-trianguloC"];
    const v = ids.map(id => parseFloat(document.getElementById(id).value));
    const pTriangulo = document.getElementById("resultado-triangulo")
    verificarTriangulo(v[0], v[1], v[2], pTriangulo)
})