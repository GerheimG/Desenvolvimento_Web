document.addEventListener('DOMContentLoaded', function() {
    
    const botaoVermelho = document.getElementById('vermelho')

    const botaoVerde = document.getElementById('verde')

    const botaoAzul = document.getElementById('azul')

    const quadrado = document.getElementById('quadrado')

    botaoVermelho.addEventListener('click', function() {
        quadrado.style.backgroundColor = 'red'
    })

    botaoVerde.addEventListener('click', function() {
        quadrado.style.backgroundColor = 'green'
    })

    botaoAzul.addEventListener('click', function() {
        quadrado.style.backgroundColor = 'blue'
    })
})