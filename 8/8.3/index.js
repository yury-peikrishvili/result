function getDivisorsCount(number){
    let result = 0 
    if (!Number(number)){
          return NaN
       }
    if (!Number.isInteger(number)||Number(number)<0){
            alert(`${number} должен быть целым числом и больше нуля!`)
            return   
       }
    for(let i = 0; i<=number;i++){      
        if(number%i===0){
            result++
        }
       
    }
    return result

}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
console.log(getDivisorsCount());
console.log(getDivisorsCount('x'));
console.log(getDivisorsCount(2.3));
console.log(getDivisorsCount(-1));