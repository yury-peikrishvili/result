const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map(el=>el+0.5)

coffees.forEach((value, index) => alert(`Кофе ${value} сейчас стоит ${updatedPrices[index]} евро.`))