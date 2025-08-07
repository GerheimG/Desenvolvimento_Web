function coletarDados(callback) {
  console.log("Coletando dados...");
  setTimeout(function() {
    let dados = [1, 2, 3, 4, 5];
    console.log("Dados coletados:", dados);
    callback(dados);
  }, 5000);
}

function processarDados(dados, callback) {
  console.log("Processando dados...");
  for (let i = 0; i < dados.length; i++) {
    dados[i] = dados[i] * 2;
  }
  console.log("Dados processados:", dados);
  callback(dados); 
}

function exibirDados(dados) {
  console.log("Exibindo dados finais:");
  console.log(dados);
}

coletarDados(function(dadosColetados) {
  processarDados(dadosColetados, function(dadosProcessados) {
    exibirDados(dadosProcessados);
  });
});