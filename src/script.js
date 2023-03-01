const monthlyData = require('./data/monthlyData')

const dayWithSmallerRevenue = (data) => {
  const day = data.reduce((acc, current) => current.valor > 0 && (current.valor < acc.valor) ? current : acc);
  return `O dia ${day.dia} foi o dia de funcionamento com menor faturamento no mês, tendo faturado R$${day.valor}`;
}
  
console.log(dayWithSmallerRevenue(monthlyData));
// Saída no console
// O dia 14 foi o dia de funcionamento com menor faturamento no mês, tendo faturado R$373.7838;
