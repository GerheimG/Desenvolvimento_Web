const analisarNota = (nota) => {
    if (nota >= 7) {
        console.log("aprovado");
    } else if (5 >= nota >= 6.9) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

analisarNota(5);