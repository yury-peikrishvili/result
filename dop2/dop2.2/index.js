


function getMathResult(expression){
   let exp = []
   let allowed = [">", "<", "=", "+", "-", "*", "/"]
   for(let i = 0; i<expression.length; i++){
      if (Number(expression[i])||allowed.includes(expression[i])){exp.push(expression[i])}
   }
   let a = Number(exp[0]) 
   let b = Number(exp[2])

   if (exp.length<3){
   return 'Ошибка'
   }
   else
   {
      switch(exp[1]){
         case '+':
         return a+b
         case '-':
            return a-b
         case '*':
            return a*b
         case '/':
            return a/b
         case '<':
            return a<b
         case '>':
            return a>b
         case '=':
            return a==b
         default:
         return 'Ошибка'
      }
      }
}

console.log(getMathResult(['200', '+', 300])); // 500
console.log(getMathResult(['20', '-', '5'])); // 15
console.log(getMathResult([100, '/', 100])); // 1
console.log(getMathResult([2, '-', 2])); // 0
console.log(getMathResult(['5', '>', '10'])); // false
console.log(getMathResult(['5', '<', '10'])); // true
console.log(getMathResult(['1', '=', 1])); // true
console.log(getMathResult(['1', '**', 1])); // 'Ошибка'
console.log(getMathResult(['+', '100', 10])); // 'Ошибка'
console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4])); // '104'




