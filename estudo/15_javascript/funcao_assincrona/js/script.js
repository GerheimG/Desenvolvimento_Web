// Função assíncrona para buscar a cotação do dólar
async function obterCotacaoDolar() {
    try {
        //fetch tem Promise interna
        /*
        fetch() retorna uma Promise que representa uma
        requisição HTTP assíncrona (como buscar dados de uma API).
        */
       const resposta = await fetch('https://economia.awesomeapi.com.bbr/json/last/USD-BRL');
       if (!resposta.ok) {
        throw new Error('Erro ao buscar a cotação');
       }
       const dados = await resposta.json();
       // A API retorna um objeto com chave 'USDBRL'
       const cotacao = dados.USDBRL;

       console.log('$ Cotação do Dólar (USD -> BRL):');
       console.log('Alta:', cotacao.high);
       console.log('Baixa:', cotacao.low);
       console.log('Valor atual:', cotacao.bid);
       console.log('Data/Hora:', cotacao.create_date);
    } catch (erro) {
        console.error('Erro ao obter a cotação:', erro.message);
    }
}
// Chamando a função
obterCotacaoDolar();