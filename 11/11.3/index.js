let testDate = new Date()

function addDays(date, days){
  date.setDate(date.getDate() + days)  
return date
}


console.log(addDays(testDate,17)) //Sat Oct 01 2022 17:22:27 GMT+0300 (Moscow Standard Time)