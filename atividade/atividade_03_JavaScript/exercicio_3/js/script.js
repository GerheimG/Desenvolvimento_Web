let nome = prompt("Digite seu primeiro nome: ");

function cumprimentar(nome) {
    if (nome === null || nome.trim() === '' ) {
        console.log(`Olá, Vistante!`);
    } else {
        console.log(`Olá, ${nome} seja bem-vindo`);
    }
}

cumprimentar(nome);