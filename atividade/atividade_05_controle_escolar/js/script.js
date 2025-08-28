// Espera o carregamento do DOM para garantir que os elementos existam
document.addEventListener("DOMContentLoaded", function () {
    const btnAdicionar = document.getElementById("adicionarAluno");
    const listaAlunos = document.getElementById("listaAlunos");

    // Ao clicar no botão "Adicionar Aluno"
    btnAdicionar.addEventListener("click", function () {
        const nome = document.getElementById("nomeAluno").value.trim();
        const frequencia = parseInt(document.getElementById("freqAluno").value);
        const notasTexto = document.getElementById("notasAluno").value;

        // Validação básica
        if (!nome || isNaN(frequencia) || !notasTexto) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        if (frequencia > 100 || frequencia < 0) {
            alert('Insira uma frequência válida (0 - 100)');
            return;
        }

        if (nome == Number(nome)) {
            alert('Insira um nome válido');
            return;
        }

        // Converte as notas para um array de números
        const notas = notasTexto.split(",").map(nota => parseFloat(nota.trim()));

        // Verifica se foram passadas exatamente 4 notas válidas
        if (notas.length !== 4 || notas.some(isNaN)) {
            alert("Informe 4 notas válidas, separadas por vírgula.");
            return;
        }

        // Calculando a média das notas
        const media = calcularMedia(notas);

        // Calculando a menção com a frequência e a média
        const mensao = calcularMensao(media, frequencia);

        // Criar a nova linha manualmente
        const novaLinha = document.createElement("tr");

        // Nome
        const tdNome = document.createElement("td");
        tdNome.textContent = nome;

        //Frequência
        const tdFrequencia = document.createElement("td");
        tdFrequencia.textContent = `${frequencia}%`;

        // Média
        const tdMedia = document.createElement("td");
        tdMedia.textContent = media.toFixed(1); // Uma casa decimal

        // Menção
        const tdMensao = document.createElement("td");
        tdMensao.textContent = mensao;

        // botão de remover
        const tdAcoes = document.createElement("td");
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";n 

        // Ação do botão: remove a linha
        btnRemover.addEventListener("click", function () {
            novaLinha.remove();
        });

        tdAcoes.appendChild(btnRemover);

        // Adiciona o conteúdo na linha
        novaLinha.appendChild(tdNome);
        novaLinha.appendChild(tdFrequencia);
        novaLinha.appendChild(tdMedia);
        novaLinha.appendChild(tdMensao);
        novaLinha.appendChild(tdAcoes);

        // Adiciona a nova linha na tabela
        listaAlunos.appendChild(novaLinha);

        // Limpar os campos
        document.getElementById("nomeAluno").value = "";
        document.getElementById("freqAluno").value = "";
        document.getElementById("notasAluno").value = "";
    });

    // Função para calcular média
    function calcularMedia(notas) {
        const soma = notas.reduce((i, nota) => i + nota, 0);
        return soma / notas.length;
    }

    // Função para definir a menção
    function calcularMensao(media, frequencia) {
        if (frequencia < 75) {
            return "F"; // Reprovado por falta
        } else if (media >= 9) {
            return "A";
        } else if (media >= 7) {
            return "B";
        } else if (media >= 5) {
            return "C";
        } else if (media >= 3) {
            return "D";
        } else {
            return "F";
        }
    }
});
