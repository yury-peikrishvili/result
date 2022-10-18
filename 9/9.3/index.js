const coffees = ['Latte', 'Cappuccino', 'Americano'];
coffeeName = prompt('Поиск кофе по названию:').trim();
function findCoffee(coffee, array){
    let foundCoffee =  {name:array.find(element => element.toLowerCase() === coffee.toLowerCase()),
                        index: array.findIndex(element => element.toLowerCase() === coffee.toLowerCase())+1}
    return foundCoffee.name?foundCoffee:false
}

let foundCoffee = findCoffee(coffeeName, coffees)

if (foundCoffee){
    alert(`Держите ваш любимый кофе ${foundCoffee.name}. Он ${foundCoffee.index}-й по популярности в нашей кофейне.`)
}
else{
    alert(`К сожалению, такого вида кофе нет в наличии`)
}


