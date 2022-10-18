const goals = [8, 1, 1, 3, 2, -1, 5];

let numberOfGoals = Math.max(...goals)
let number = goals.indexOf(numberOfGoals)+1
alert(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfGoals} гол(ов).`)

numberOfGoals = Math.min(...goals.filter(val=>val>=0))
number = []
goals.forEach((val, ind) => {if(val === numberOfGoals){number.push(ind+1)}})

alert(`Самые не результативные матчи были под номерами ${number}. В каждом из них было забито по ${numberOfGoals} мячу(а).`)
numberOfGoals = goals.filter(val=>val>=0).reduce((a,b)=>a + b, 0 )
alert(`Общее количество голов за сезон равно ${numberOfGoals}`)

if(Math.min(...goals)<0){
  alert(`Были автоматические поражения: да`)
}
else{
  alert(`Были автоматические поражения: нет`)
}

numberOfGoals = (goals.reduce((a, b) => a + b, 0) / goals.length);
alert(`Среднее количество голов за матч равно ${numberOfGoals}`)

alert(goals.slice().sort())

