document.addEventListener('DOMContentLoaded', function () {
            const numero = document.getElementById('numero');
            const resultado = document.getElementById('resultado');
            const btn = document.getElementById('btnTabuada');

            btn.addEventListener('click', function () {
                const valor = Number(numero.value);
                resultado.innerHTML = ''; // Limpa antes

                if (isNaN(valor) || numero.value === '') {
                    alert('Digite um número válido!');
                    return;
                }

                for (let i = 1; i <= 10; i++) {
                    const li = document.createElement('li');
                    li.textContent = `${valor} x ${i} = ${valor * i}`;
                    li.classList.add('list-group-item');
                    resultado.appendChild(li);
                }
            });
        });