function getWinner(applicants, winnerObject){
   let minnum = Math.min(...Object.keys(applicants))
   let maxnum = Math.max(...Object.keys(applicants))
   let randomnum = getRandomNumberInRange(minnum, maxnum);
   let closest = Object.keys(applicants).reduce(function(prev, curr) {
      return (Math.abs(curr - randomnum) < Math.abs(prev - randomnum) ? curr : prev);
    });
    return {prize:todaysWinner.prize,name:applicants[closest].name,age:(applicants[closest].age)}
}

function getRandomNumberInRange(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
   prize: '10 000$',
}
 
const winnerApplicants = {
   '001': {
      name: 'Максим',
      age: 25,
   },
   '201': {
      name: 'Светлана',
      age: 20,
   },
   '304': {
      name: 'Екатерина',
      age: 35,
   },
}
 
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 
// { prize: '10 000$', name: 'Максим', age: 25 }