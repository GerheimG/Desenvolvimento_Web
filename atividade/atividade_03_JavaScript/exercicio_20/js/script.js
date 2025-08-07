function atenderCliente(callback) {
  console.log("Atendendo cliente...");
  callback();
}

function cliente1() {
  console.log("Olá, sou o Cliente 1. Preciso de ajuda com meu pedido.");
}

function cliente2() {
  console.log("Oi, aqui é o Cliente 2. Quero saber sobre os produtos.");
}

function cliente3() {
  console.log("Bom dia, Cliente 3 falando. Tenho uma dúvida sobre a entrega.");
}

atenderCliente(cliente1);
atenderCliente(cliente2);
atenderCliente(cliente3);