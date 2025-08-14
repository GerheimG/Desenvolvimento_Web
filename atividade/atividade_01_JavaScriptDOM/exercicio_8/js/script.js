document.addEventListener('DOMContentLoaded', function() {
    const caracter = document.getElementById('caracter')

    const btnVerificar = document.getElementById('btnVerificar')

    const mensagem = document.getElementById('mensagem')

    btnVerificar.addEventListener('click', function() {
        let valor = caracter.value.trim();

        if (valor === '') {
            mensagem.textContent = 'Escreva algo';
            return;
        }
        if (valor.toLowerCase() === 'true' || valor.toLowerCase() === 'false') {
            mensagem.textContent = 'Tipo detectado: Boolean'
            return;
        }
        let num = Number(valor);
        if (!isNaN(num)) {
            mensagem.textContent = 'Tipo detectado: Number'
        }
        mensagem.textContent = 'Tipo detectado: String'
    })
})