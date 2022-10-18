function getSumOfNumbers(number, type = 'odd'){
   let sum = 0
   if (!Number(number)) 
      {
         return NaN
      }
   if(type === 'even'){
      for (let i=0; i<=number ; i=i+2){
         sum = sum+i
      }
   } else if(type === 'odd'){
      for (let i=1; i<=number ; i=i+2){
         sum = sum+i
      }
   }
   else if(type === ''){
      for (let i=0; i<=number ; i++){
         sum = sum+i
      }
   }
   return sum 
}

console.log(getSumOfNumbers(10, 'odd')); // 25
console.log(getSumOfNumbers(10, 'even')); // 30
console.log(getSumOfNumbers(10, '')); // 55
console.log(getSumOfNumbers('x', 'odd')); // NaN