// Registo associativos de objetos
let pessoas = [
    {nome: 'Joâo Silva', idade: 30, email: 'joao@email.com'},
    {nome: 'Maria Souza', idade: 25, email: 'maria@email.com'},
    {nome: 'Carlos Lima', idade: 40, email: 'carlos@email.com'}
];

//  Função para adicionar uma nova pessoa ao array
function adicionarPessoa(nome, idade, email) {
    let novaPessoa = {
        nome: nome,
        idade: idade,
        email: email
    };
    pessoas.push(novaPessoa);
}

// Função para exibir todos os elementos do objetos pessoas
function exibirPessoas() {
    console.log('Lista de Pessoas:');
    pessoas.forEach(function(pessoa, indice) {
        console.log(`Pessoa ${indice + 1}:`);
        console.log(`Nome: ${pessoa.nome}`);
        console.log(`Idade: ${pessoa.idade}`);
        console.log(`Email: ${pessoa.email}`);
        console.log('------------------------');
    });
}

// Inserção dos dados
adicionarPessoa('Ana Beatriz', 25, 'ana@email.com');

//Exibição dos dados
exibirPessoas();