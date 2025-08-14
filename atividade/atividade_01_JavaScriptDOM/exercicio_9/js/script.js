document.addEventListener('DOMContentLoaded', function() {

    const btnAlterar = document.getElementById('btnAlterar');

    const body = document.getElementById('body');

    const titulo = document.getElementById('titulo');

    const texto = document.getElementById('texto');

    const linha = document.getElementById('linha');

    let modoEscuro = false

    btnAlterar.addEventListener('click', function() {
        if (!modoEscuro) {
        body.style.backgroundColor = 'black'
        titulo.style.color = 'white'
        texto.style.color = 'white'
        linha.style.color = 'white'
        modoEscuro = true;
        } else {
        body.style.backgroundColor = 'white'
        titulo.style.color = 'black'
        texto.style.color = 'black'
        linha.style.color = 'black'
        modoEscuro = false;
        }
    })
})