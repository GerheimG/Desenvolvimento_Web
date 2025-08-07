function formatarData(dia, mes, ano) {
  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }
  return dia + '/' + mes + '/' + ano;
}

console.log(formatarData(17,11, 2025)); 
console.log(formatarData(1, 9, 1999)); 
console.log(formatarData(10, 10, 2000));  