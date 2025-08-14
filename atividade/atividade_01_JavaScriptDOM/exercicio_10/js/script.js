document.addEventListener('DOMContentLoaded', function() {

    const senha = document.getElementById('senha');

    const aviso = document.getElementById('mensagem');

    const btnTeste = document.getElementById('btnEnviar');

    btnTeste.addEventListener('click', function() {

        const texto = senha.value

        if (texto.lenght > 1){
            aviso.textContent = 'Senha fraca'
        }
    })
})