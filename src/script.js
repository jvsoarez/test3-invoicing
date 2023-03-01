const monthlyData = require('./data/monthlyData')

// • O menor valor de faturamento ocorrido em um dia do mês;


const dayWithSmallerRevenue = (data) => {
  const day = data.reduce((acc, current) => current.valor > 0 && (current.valor < acc.valor) ? current : acc);
  return `O dia ${day.dia} foi o dia de funcionamento com menor faturamento no mês, tendo faturado R$${day.valor}`;
}
  
console.log(dayWithSmallerRevenue(monthlyData));
// Saída no console
// O dia 14 foi o dia de funcionamento com menor faturamento no mês, tendo faturado R$373.7838;


// • O maior valor de faturamento ocorrido em um dia do mês;

const dayWithHighestRevenue = (data) => {
  const day = data.reduce((acc, current) => current.valor > acc.valor ? current : acc);
  return `O dia ${day.dia} foi o dia de funcionamento com menor faturamento no mês, tendo faturado R$${day.valor}`;
}
  
console.log(dayWithHighestRevenue(monthlyData));
// Saída no console
// O dia 16 foi o dia de funcionamento com menor faturamento no mês, tendo faturado R$48924.2448;

