async function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "Pedro", idade: 40 });
        }, 2000);
    });
}


async function exibirUsuario() {
    const usuario = await buscarUsuario();
    console.log(usuario);
}


exibirUsuario();