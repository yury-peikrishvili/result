const numbers = [10, 4, 100, -5, 54, 2];

let valfor = 0
let valforof = 0
let valforEach = 0

for (let i = 0; i<numbers.length;i++ ){
   valfor=valfor + numbers[i]**3
}

for(let num of numbers){
    valforof = valforof + num**3
}

numbers.forEach(el => valforEach = valforEach + el**3)

let valreduce = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue**3, 0
  );

console.log(`for: ${valfor}`)
console.log(`for...of: ${valforof}`)
console.log(`forEach(): ${valforEach}`)
console.log(`reduce(): ${valreduce}`)
