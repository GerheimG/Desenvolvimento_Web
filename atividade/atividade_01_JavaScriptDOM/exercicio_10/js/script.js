document.addEventListener('DOMContentLoaded', function () {
            const senha = document.getElementById('senha');
            const aviso = document.getElementById('mensagem');
            const btnTeste = document.getElementById('btnTeste');

            btnTeste.addEventListener('click', function () {
                const texto = senha.value;

                const temMaiuscula = /[A-Z]/.test(texto);
                const temMinuscula = /[a-z]/.test(texto);
                const temNumero = /[0-9]/.test(texto);
                const tamanhoOk = texto.length >= 8;

                if (temMaiuscula && temMinuscula && temNumero && tamanhoOk) {
                    aviso.textContent = "Senha forte";
                    aviso.style.color = "green";
                } else {
                    aviso.textContent = "Senha fraca(use maiúsculas, minúsculas, números e pelo menos 8 caracteres)";
                    aviso.style.color = "red";
                }
            });
        });