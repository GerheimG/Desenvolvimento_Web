async function buscarDadosDeAPI() {
  if (Math.random() > 0.5) {
    return "Sucesso!";
  } else {
    throw new Error("Falha na API");
  }
}

async function executar() {
  try {
    const resultado = await buscarDadosDeAPI();
    console.log(resultado);
  } catch (erro) {
    console.log(erro.message);
  }
}

executar();