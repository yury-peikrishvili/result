//Function expression
const getName2 = function(name){
  return `Имя равно ${name}`
}

//Arrow function expression
getName3 = name => {return `Имя равно ${name}`}

console.log(getName1('Илья'))
console.log(getName2('Петр'))
console.log(getName1('Вика'))

//Function declaration
function getName1(name){
  return `Имя равно ${name}`
}
