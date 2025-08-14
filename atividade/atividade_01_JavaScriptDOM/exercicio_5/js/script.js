document.addEventListener('DOMContentLoaded', function() {
    
    const tarefa = document.getElementById('tarefa');

    const botaoAdd = document.getElementById('adicionar');

    const ul = document.getElementById('lista')

    // Função que adiciona um <li> com texto dentro da <ul>
    const addItem = texto => {
        // Cria um novo elemento <li>
        const li = document.createElement('li');
        // Define o texto do <li>
        li.textContent = texto;
        // Adiciona o <li> como filho da <ul>
        ul.appendChild(li)
    };

    botaoAdd.addEventListener('click', function() {

        addItem(tarefa.value);
        tarefa.value = ''
    })
})