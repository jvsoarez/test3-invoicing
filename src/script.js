const monthlyData = require('./data/monthlyData')


// • O menor valor de faturamento ocorrido em um dia do mês;

const dayWithSmallerRevenue = (data) => {
  const day = data.reduce((acc, current) => current.valor > 0 && (current.valor < acc.valor) ? current : acc);
  let { dia, valor } = day;
  valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return `O dia ${dia} foi o dia de funcionamento com menor faturamento no mês, tendo faturado ${valor}.`;
}
  
console.log(dayWithSmallerRevenue(monthlyData));
// Saída no console
// O dia 14 foi o dia de funcionamento com menor faturamento no mês, tendo faturado R$ 373,78.


// • O maior valor de faturamento ocorrido em um dia do mês;

const dayWithHighestRevenue = (data) => {
  const day = data.reduce((acc, current) => current.valor > acc.valor ? current : acc);
  let { dia, valor } = day;
  valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return `O dia ${dia} foi o dia de funcionamento com maior faturamento no mês, tendo faturado ${valor}.`;
}
  
console.log(dayWithHighestRevenue(monthlyData));
// Saída no console
// O dia 16 foi o dia de funcionamento com maior faturamento no mês, tendo faturado R$ 48.924,24.


// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const dayWithHigherThanAverageRevenue = (data) => {
  const sumValueOfAllDay = data.reduce((acc, current) => acc + current.valor, 0);
  const average = sumValueOfAllDay / data.length;
  const days = data.filter((day) => day.valor > average);
  return `No total, foram ${days.length} dias com o faturamento maior que a média do mês.`;
}

console.log(dayWithHigherThanAverageRevenue(monthlyData));
// Saída no console
// No total, foram 12 dias com o faturamento maior que a média do mês.
