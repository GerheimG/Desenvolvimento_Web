// array basico para exemplos basicos
const numeros = [1, 2, 3, 4, 5];


const pessoas = [
    {nome: 'Gal Gadot', idade: 40, cidade:'Rosh HaAyin'},
    {nome: 'Elizabeth Olsen', idade: 36, cidade:'Sherman Oaks'},
    {nome: 'Alexandra Daddario', idade: 39, cidade:'Nova York'},
    {nome: 'Anna de Armas', idade: 37, cidade:'Havana'},
    {nome: 'Grace Kelly', idade: 95, cidade:'Filadélfia'},
    {nome: 'Jaz Sinclair', idade: 17, cidade:'Dallas'}
];


//forEach(): executa uma função para cada elemento
document.getElementById('botao-paraCada').addEventListener('click', function() {
    //variavel para acumular os resultados
    let resultado = '';

    // usando forEach para iterar sobre cada número
    numeros.forEach(function(numero, indice) {
        resultado += `Posição ${indice}: ${numero}\n`;
    });

    // exibindo os resultados na página
    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <stong>Iteração  com forEach:</strong><br>
    ${resultado}
    <small>Observação: forEach não retorna um novo array</small>
    `;
});

//map(): cria um novo array com os resultados de uma função aplicada a cada elemento
document.getElementById('botao-mapear').addEventListener('click', function() {
    // usando map ppara criar um novo array com os quadrados dos núme,ros 
    const quadrados = numeros.map(function(numero){
        return numero * numero;
    });

    //resultado
    document.getElementById('resultado-mapear').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <stong>Array com quadrados (map)</strong> ${JSON.stringify(quadrados)}<br><br>
    <small>Observação: map sempre retorna um novo array do mesmo tamanho</small>
    `;
});

//filter(): cria um novo array com elementos que passam em um teste (função)
document.getElementById('botao-filtrar').addEventListener('click', function(){
    //filtrando apenas pessoas com idade >= 18
    const maioresDeIdade = pessoas.filter(function(pessoa){
        return pessoa.idade >= 18
    });

    //resultado
    document.getElementById('resultado-filtrar').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <stong>Maiores de idade (filter):</strong> ${JSON.stringify(maioresDeIdade, null, 2)}<br><br>
    <small>Observação: filter retorna um novo array apenas com elementos que passam no teste</small>
    `;
});

//reduce(): Reduz o array a um único valor usando uma função acumuladora
document.getElementById('botao-reduzir').addEventListener('click', function(){
    // somando todos os números do array
    const somaTotal = numeros.reduce(function(acumulador, numeroAtual){
        return acumulador + numeroAtual;
    }, 0); // 0 é o valor inicial do acumulador

    // resultado
    document.getElementById('resultado-reduzir').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <stong>Soma total (reduce):</strong> ${somaTotal}<br>
    <small>Observação: reduce pode transoformar um array em qualquer tipo de valor</small>
    `;
});

//find(): retorna o primeiro elemento que satisfaz uma condição
document.getElementById('botao-encontrar').addEventListener('click', function(){
    //encontrando a primeira pessoa menor de idade
    const menorDeIdade = pessoas.find(function(pessoa){
        return pessoa.idade < 18;
    });

    //resultado
    document.getElementById('resultado-encontrar').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <stong>Primerio menor de idade:</strong> ${JSON.stringify(menorDeIdade)}<br><br>
    <small>Observação: find retorna apenas o primeiro elemento encontrado</small>
    `;
});

// some() e every(): some = verifica se pelo menos um elemento satisfaz a cndição ||
                //   every = verifica se todos os elementos satifazem a condição
document.getElementById('botao-algum').addEventListener('click', function(){
    //verificando se há pelo menos um menor de idade
    const existeMenor = pessoas.some(function(pessoa) {
        return pessoa.idade < 18;
    });

    document.getElementById('resultado-algum').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <stong>Existe algum menor de idade? (some):</strong> ${existeMenor? 'Sim' : 'Não'}<br>
    <small>Observação: some retorna true se pelo menos um elemento passar no teste</small>
    `;
});

document.getElementById('botao-todos').addEventListener('click', function() {
    const todosMaiores = pessoas.every(function(pessoa){
        return pessoa.idade >= 18;
    });

    document.getElementById('resultado-todos').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
    <stong>Todos são maiores de idade? (every):</strong> ${todosMaiores? 'Sim' : 'Não'}<br>
    <small>Observação: every retorna true apenas se TODOS os elementos passarem no teste</small>
    `;
});
