function processarPedido(produto, callback) {
    console.log(`Recebendo pedido de: ${produto}...`);

    setTimeout(() => {
        callback(`Seu pedido de "${produto}" está pronto!`);
    }, 2000); 
}


function avisarPedidoPronto(mensagem) {
    console.log(mensagem);
}


processarPedido("Pizza", avisarPedidoPronto);