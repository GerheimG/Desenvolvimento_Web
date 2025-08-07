function executarTarefas(funcao1, funcao2) {
    funcao1();
    funcao2(); 
}

function mostrarHora() {
    const hora = new Date();
    console.log("Hora atual:", hora.toLocaleTimeString());
}

function mostrarData() {
    const data = new Date();
    console.log("Data atual:", data.toLocaleDateString());
}

executarTarefas(mostrarHora, mostrarData)